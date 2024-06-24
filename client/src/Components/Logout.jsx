import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BiPowerOff} from 'react-icons/bi'
function Logout(){
    const navigate=useNavigate();
    const handleClick=async()=>{
        localStorage.clear();
        navigate("/");
    }
    return(
        <button onClick={handleClick} className="flex items-center justify-center p-[0.6rem] bg-[#9a86f3] rounded-3xl text-3xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700">
        <BiPowerOff/>
        </button>
    )
}
export default Logout;