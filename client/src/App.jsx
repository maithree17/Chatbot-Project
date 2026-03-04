import React from 'react'
import Sidebar from './Components/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Chatbox from './Components/Chatbox'
import Credits from './Pages/Credits'
import Community from './Pages/Community'

function App() {
  return (
    <>
      <div>
        <div className="flex h-screen w-screen">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chatbox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App