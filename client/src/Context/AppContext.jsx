import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyuserdata } from "../assets/assets";


const AppContext=createContext()

export const AppContextProvider=({Children})=>{
    const navigate=useNavigate()
    const [user,setuser]=useState(null)
    const [chats,setchats]=useState([])
    const [selectedchat,setselectedchat]=useState(null)
    const [theme,settheme]=useState(localStorage.getItem('theme')||'light')


    const fetchuser=async ()=>{
        setuser(dummyuserdata)
    }

    const fetchuserchat=async()=>{
        setchats(dummychats)
        setselectedchat(dummychats[0])
    }


    useEffect(()=>{
        fetchuser()
    },[])

    useEffect(()=>{
        if(user){
            fetchuserchat()
        }else{
            setchats([])
            setselectedchat(null)
        }
    },[user])

    const value={
        navigate,
        user,
        setuser,
        chats,
        setchats,
        selectedchat,
        setselectedchat,
        theme
    }
    return(
        <AppContext.Provider value={value}>
            {Children}
        </AppContext.Provider>
    )
}

export const userContext=()=> userContext(AppContext)