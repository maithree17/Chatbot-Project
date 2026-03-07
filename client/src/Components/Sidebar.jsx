import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext.jsx";
import { assets } from "../assets/assets";

function Sidebar() {
  const { chats, setselectedchat, theme, settheme, user } = useAppContext();
  const [search, setsearch] = useState("");

  return (
    <div className="h-screen w-60 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col p-5">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo_light}
          alt="logo"
          className="w-full max-w-48 object-contain"
        />
      </div>

      {/* New Chat Button */}
      <button className="flex items-center gap-1 w-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-medium py-2 px-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200">
        <span className="text-xl font-bold">+</span>
        <span>New Chat</span>
      </button>

      {/* Search */}
      <div className="flex items-center gap-2 mt-6 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg w-full border border-transparent focus-within:border-blue-500 transition">
        <img src={assets.search_icon} alt="search_icon" className="w-5 brightness-0 opacity-60 dark:invert"/>
        <input onChange={(event) => setsearch(event.target.value)} value={search} type="text" placeholder="Search conversations" className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder-gray-400"/>
      </div>

      {/*Recent chats*/}
      {chats.length >0 && <p className="mt-4 text-sm">Recent Chats</p>}
      <div>
        
      </div>
    </div>
  );
}

export default Sidebar;
