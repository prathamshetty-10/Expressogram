
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Buffer } from "buffer";
import loader from "../assets/loading.gif";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../utils/APIRoutes";
function Avatar(){
    const api = `https://api.multiavatar.com/4645646`;
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);//array of avatars
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);
    useEffect(async () => {
        if (!localStorage.getItem('expressogram-user'))
          navigate("/login");
      }, []);

      const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
          toast.error("Please select an avatar");
        }
        else {
          const user = await JSON.parse(
            localStorage.getItem('expressogram-user')
          );
    
          const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {//sending user id as params
            image: avatars[selectedAvatar],
          });
    
          if (data.isSet) {
            user.isAvatarImageSet = true;
            user.avatarImage = data.image;
            localStorage.setItem(
              'expressogram-user',
              JSON.stringify(user)
            );
            navigate("/");
          } 
          else {
            toast.error("Error setting avatar. Please try again.", toastOptions);
          }
        }
      };

    useEffect(async () => {//first time when component loads we just need to send random number to api
        const data = [];
        for (let i = 0; i < 4; i++) {
          const image = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`
          );
          const buffer = new Buffer(image.data);
          data.push(buffer.toString("base64"));
        }
        setAvatars(data);
        setIsLoading(false);
      }, []);
    return <div>

    {isLoading?(<div>
      <img src={loader} alt="loader" />
      </div>


    ):(
      <div>
      <h1> Pick An Avatar</h1>
      <div>
            {avatars.map((avatar, index) => {
              return (
                selectedAvatar === index?(<div>
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>):(
                  <div>
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>


                )
                
              );
            })}
        </div>
        <button onClick={setProfilePicture} className="submit-btn">
            Set as Profile Picture
          </button>
      
      
      </div>

    )}
    
    </div>

};
export default Avatar;