import React from "react";
import { useState } from "react";
import Logo from '../assets/logo.svg'
import profile from '../assets/836.jpg'
import Logout from "./Logout";

function Contacts({contacts,currentuser,changeChat}){//list of contacts as props
    const [currentUserName,setCurrentUser]=useState(currentuser.username);
    const [currentSelected,setCurrentSelected]=useState(undefined);


    const changeCurrentChat=(index,contact)=>{
        setCurrentSelected(index);
        changeChat(contact);
    }
    return <div className="text-white flex flex-col items-center text-3xl gap-[0.8rem]   ">
    
    
    <div className="flex gap-[40px]  p-[0.4rem]  items-center justify-center text-3xl bg-[#ffffff39] min-h-[5rem] w-[100%] transition ease-in-out duration-200 mb-[10px] ">
    <Logout/>
    <img src={profile} className="h-[40px] w-[40px] rounded-full" />
        <div className="text-white">{currentUserName}</div>
    </div>
    Contacts
    {
        contacts?.map((contact,index)=>{
            return(
                currentSelected===index?(
                    <div className="flex gap-[40px] cursor-pointer rounded-[0.5rem] p-[0.4rem]   items-center justify-center text-3xl bg-[#762b98] min-h-[5rem] w-[90%] transition ease-in-out duration-200 my-[10px] border-2 border-white" key={index} onClick={()=>changeCurrentChat(index,contact)}>
                    <img src={profile} className="h-[40px] w-[40px] rounded-full" />
                    <div className="text-white">{contact.username}</div>
                    </div>
                ):(<div className="flex gap-[40px] cursor-pointer rounded-[0.5rem] p-[0.4rem]   items-center justify-center text-3xl bg-[#ffffff39] min-h-[5rem] w-[90%] transition ease-in-out duration-200 my-[10px]" key={index} onClick={()=>changeCurrentChat(index,contact)}>
                    <img src={profile} className="h-[40px] w-[40px] rounded-full" />
                    <div className="text-white">{contact.username}</div>
                    </div>)
                
            )
        })
    }
    
    </div>

}
export default Contacts;