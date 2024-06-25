import React from "react";
import robot from '../assets/robot.gif'
function Welcome({currentuser}){
    return(
        <div className="flex flex-col items-center justify-center text-white text-3xl font-extrabold">
        <img src={robot} className="mb-0 h-[350px] w-[350px] lg:h-[450px] lg:w-[450px]" />
        <h1 className="mb-[40px]">Welcome, {currentuser.username}!!</h1>
        <div className="flex justify-center items-center text-xl lg:text-2xl"><p>Please Select A Chat To Start Messaging.</p></div>
        
        
        </div>
    )
}
export default Welcome;