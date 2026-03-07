import { createContext, useEffect, useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { dummyUserData,dummyChats } from "../assets/assets";


export const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const navigate=useNavigate()
    const [user,setuser]=useState(null)
    const [chats,setchats]=useState([])
    const [selectedchat,setselectedchat]=useState(null)
    const [theme,settheme]=useState(localStorage.getItem('theme')||'light')


    const fetchuser=async ()=>{
        setuser(dummyUserData)
    }

    const fetchuserchat=async()=>{
        setchats(dummyChats)
        setselectedchat(dummyChats[0])
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

    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])

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
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=> useContext(AppContext)