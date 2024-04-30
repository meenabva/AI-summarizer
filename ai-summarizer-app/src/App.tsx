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
   </div>
  )
}

export default App
