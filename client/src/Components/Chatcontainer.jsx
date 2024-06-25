import React from "react";
import profile from '../assets/836.jpg'

import ChatInput from "./ChatInput";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import {getMessageRoute, sendMessageRoute} from '../utils/APIRoutes.js'
function Chatcontainer({currentuser,currentChat,socket}){
    const [arrivalMessage,setArrivalmessage]=useState(null);
    const handleSendMessage=async(msg)=>{
        await axios.post(sendMessageRoute,{
            from:currentuser._id,
            to:currentChat._id,
            message:msg,
        })
        socket.emit("send-msg",{
            to:currentChat._id,
            from:currentuser._id,
            message:msg,
        })
        const msgs=[...messages];
        msgs.push({fromSelf:true,message:msg});
        setMessages(msgs);
    }
    const [messages,setMessages]=useState([]);
    const func=async()=>{
        if(currentChat){
        const response=await axios.post(getMessageRoute,{
            from:currentuser._id,
            to:currentChat._id,
        })
        setMessages(response.data);}
    }
    useEffect(()=>{
        func();
    },[currentChat])

    useEffect(()=>{
        if(socket){
            socket.on("msg-receive",(data)=>{
                setArrivalmessage({fromSelf:false,message:data.message,from:data.from});
            })
        }
    },[])
    useEffect(()=>{
        if(arrivalMessage){ 
            if(arrivalMessage.from==currentChat._id){
             const newmsg={
                fromSelf:false,
                message:arrivalMessage.message
             }
             setMessages((prev)=>[...prev,newmsg])}}
    },[arrivalMessage])


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

            <div className="h-[63vh] py-[0.5rem] px-[2rem] flex flex-col gap-[1rem] ">
            <ScrollToBottom className="h-[63vh] ">
            {
            messages.map((message)=>{
                return(
                <div key={message}>
                    {message.fromSelf?(<div className="text-white flex justify-end items-center w-[50%] my-[15px] ml-[200px] lg:ml-[420px] "><div className=" max-w-[90%] py-[0.5rem] px-[2rem] break-words lg:text-xl rounded-3xl bg-[#9900ff20]">{message.message}</div></div>):(<div className="text-white flex  justify-start items-center w-[50%] my-[15px] "><div className=" max-w-[90%] py-[0.5rem] px-[2rem] break-words lg:text-xl rounded-3xl bg-[#4f04ff21]">{message.message}</div></div>)
                }
                </div>


                )
                
                })
            
            }
            
            </ScrollToBottom>
            </div>
            <div>
            <ChatInput handleSendMessage={handleSendMessage} />
            
            
            
            
            </div>




        </div>)
        }
        </div>)
}
export default Chatcontainer;