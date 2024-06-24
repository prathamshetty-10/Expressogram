import React from "react";
import profile from '../assets/836.jpg'
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import axios from "axios";
import {sendMessageRoute} from '../utils/APIRoutes.js'
function Chatcontainer({currentuser,currentChat}){
    const handleSendMessage=async(msg)=>{
        await axios.post(sendMessageRoute,{
            from:currentuser._id,
            to:currentChat._id,
            message:msg,
        })
    }
    return(
        <div className="max-h-[100%] overflow-hidden ">
        
        {currentChat && (
        <div className="flex flex-col">
            <div className="flex text-white justify-between items-center py-[1rem] px-[3rem]">
                <div className="flex gap-[3rem]">
                    <img src={profile} className="h-[50px] w-[50px] rounded-full" />
                    <div className="text-white text-4xl">{currentChat?.username}</div>
                </div>
            </div>

            <div>
            <Messages/>
            
            </div>
            <div>
            <ChatInput handleSendMessage={handleSendMessage} />
            
            
            
            
            </div>




        </div>)}
        </div>)
}
export default Chatcontainer;