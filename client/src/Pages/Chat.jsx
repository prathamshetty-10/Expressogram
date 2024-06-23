import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {allusersRoute} from '../utils/APIRoutes.js'
import Contacts from "../Components/Contacts.jsx";
function Chat(){
    const navigate=useNavigate();
    const [contacts,setContacts]=useState([]);
    const [currentuser,setCurrentUser]=useState(undefined);

    useEffect(async()=>{
        if(!localStorage.getItem("expressogram-user")){
            navigate("/login");
        }
        else{
            setCurrentUser(await JSON.parse(localStorage.getItem("expressogram-user")));
        }
    })
    useEffect(async()=>{
        if(currentuser){
            const data=await axios.get(`${allusersRoute}/${currentuser._id}`);
            setContacts(data.data);
        }
        else{
            navigate("/login");
        }
    },[currentuser])//whenever change in current user u need to call the api
    return(<div className="h-[100vh] w-[100vw] bg-[#131324] flex items-center justify-center" >
        <div className="h-[85vh] w-[85vw] bg-[#00000076] flex">
            <div className="w-[25%]">
                <Contacts contacts={contacts} currentuser={currentuser}/>
            </div>
            <div className="w-[75%]">
            
            </div>
        
        
        
        
        </div>
        
        
        
        
        
        </div>)
}
export default Chat;