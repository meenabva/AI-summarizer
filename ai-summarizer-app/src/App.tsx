import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Summary from './components/Summary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/:searchId" element={<Summary/>} />
      </Routes>
    </BrowserRouter>
    <div className="w-full h-full mx-auto max-w-screen-xl p-4 md:flex md:items-end md:justify-end align-text-bottom">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Powered By Gemini AI
    </span>
    </div>
   </div>
  )
}

export default App
