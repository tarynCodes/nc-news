import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Header from "./components/header"
import NavBar from './components/NavBar'
import './App.css'
import ArticleContainer from './components/article.container'


function App() {
  const[articles, setArticles] = useState([])
  return (
    <div>
  <NavBar/>
  <Header />
  <ArticleContainer articles={articles} setArticles={setArticles}/>
  <Routes>
  <Route path="/" element={<Home />}/>
  </Routes>
    </div>
  )
}

export default App
