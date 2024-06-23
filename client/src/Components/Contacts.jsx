import React from "react";
import { useState } from "react";
import Logo from '../assets/logo.svg'
import profile from '../assets/836.jpg'

function Contacts({contacts,currentuser}){//list of contacts as props
    const [currentUserName,setCurrentUser]=useState(currentuser.username);
    const [currentSelected,setCurrentSelected]=useState(undefined);

    return <div className="text-white ">
    
    
    <div className="flex gap-[40px] w-full p-[10px]  items-center justify-center text-3xl">
    <img src={profile} className="h-[40px] w-[40px] rounded-full" />
    <div className="text-white">{currentUserName}</div>
    </div>
    Contacts
    {
        contacts?.map((contact,index)=>{
            return(
                <div className="flex gap-[40px] w-full p-[10px]  items-center justify-center text-3xl" key={index}>
                <img src={profile} className="h-[40px] w-[40px] rounded-full" />
                <div className="text-white">{contact.username}</div>
                </div>

            )
        })
    }
    
    </div>

}
export default Contacts;