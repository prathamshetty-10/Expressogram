import React from "react";
import profile from '../assets/836.jpg'
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {getMessageRoute, sendMessageRoute} from '../utils/APIRoutes.js'
function Chatcontainer({currentuser,currentChat}){
    const handleSendMessage=async(msg)=>{
        await axios.post(sendMessageRoute,{
            from:currentuser._id,
            to:currentChat._id,
            message:msg,
        })
    }
    const [messages,setMessages]=useState([]);
    const func=async()=>{
        const response=await axios.post(getMessageRoute,{
            from:currentuser._id,
            to:currentChat._id,
        })
        setMessages(response.data);
    }
    useEffect(()=>{
        func();
    },[currentChat])
    return(
        <div className="max-h-[100%] overflow-hidden ">
        
        {currentChat && (
        <div className="flex flex-col">
            <div className="flex text-white justify-between items-center py-[1rem] px-[3rem]">
                <div className="flex gap-[3rem]">
                    <img src={profile} className="h-[50px] w-[50px] rounded-full" />
                    <div className="text-white text-4xl">{currentChat?.username} 
                    </div>
                </div>
            </div>

            <div className="h-[63vh] py-[1rem] px-[2rem] flex flex-col gap-[1rem] overflow-auto ">
            {
            messages.map((message)=>{
                return(
                <div>
                    {message.fromSelf?(<div className="text-white flex justify-end items-center w-[100%]  "><div className=" py-[0.5rem] px-[2rem] break-words text-xl rounded-3xl bg-[#9900ff20]">{message.message}</div></div>):(<div className="text-white flex  justify-start items-center w-[100%] "><div className=" py-[0.5rem] px-[2rem] break-words text-xl rounded-3xl bg-[#4f04ff21]">{message.message}</div></div>)
                }
                </div>


                )
                
                })
            
            }
            
            
            </div>
            <div>
            <ChatInput handleSendMessage={handleSendMessage} />
            
            
            
            
            </div>




        </div>)
        }
        </div>)
}
export default Chatcontainer;