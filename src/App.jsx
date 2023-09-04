import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Header from "./components/header"
import NavBar from './components/NavBar'
import './App.css'


function App() {
  return (
    <div>
  <NavBar/>
  <Header />
  <Routes>
  <Route path="/" element={<Home />}/>
  </Routes>
    </div>
  )
}

export default App
