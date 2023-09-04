import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div>
  <Header />
  <NavBar />
  <Home />
  <Login />
  <Topics />
  <ArticlesContainer>
    <ArticleList>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </ArticleList>
  </ArticlesContainer>
  <Footer />
    </div>
  )
}

export default App
