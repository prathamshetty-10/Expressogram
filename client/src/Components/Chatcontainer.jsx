import React from "react";
import profile from '../assets/836.jpg'
import Logout from "./Logout";
function Chatcontainer({currentuser,currentChat}){
    console.log(currentChat);
    return(
        <>
        
        {currentChat && (
        <div className="flex flex-col">
            <div className="flex text-white justify-between items-center py-[1rem] px-[3rem]">
            <div className="flex gap-[3rem]">
            <img src={profile} className="h-[50px] w-[50px] rounded-full" />
            <div className="text-white text-4xl">{currentChat?.username}</div>
            </div>
            <Logout/>
        
        
            </div>
            <div>
            
            
            </div>
            <div>
            
            
            
            
            </div>




        </div>)}
        </>)
}
export default Chatcontainer;