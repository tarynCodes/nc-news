import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Header from "./components/header"
import NavBar from './components/NavBar'
import './App.css'
import ArticleContainer from './components/article.container'
import ArticlePage from './components/article-page'


function App() {
  const[articles, setArticles] = useState([])
  return (
    <div>
  <NavBar/>
  <Header />
  <Routes>
  <Route path="/" element={<ArticleContainer articles={articles} setArticles={setArticles}/>}/>
  <Route path="/article/:id" element={<ArticlePage articles={articles} setArticles={setArticles}/>} />
  </Routes>
    </div>
  )
}

export default App
