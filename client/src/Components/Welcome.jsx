import React from "react";
import robot from '../assets/robot.gif'
function Welcome({currentuser}){
    return(
        <div className="flex flex-col items-center justify-center text-white text-3xl font-extrabold">
        <img src={robot} className="mb-0 h-[450px] w-[450px]" />
        <h1>Welcome, {currentuser.username}!!</h1>
        <div className="">Please Select A Chat To Start Messaging.</div>
        
        
        </div>
    )
}
export default Welcome;