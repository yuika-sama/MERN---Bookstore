import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import deleteBook from './pages/deleteBook'
import createBook from './pages/createBook'
import showBook from './pages/showBook'
import editBook from './pages/editBook'

const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/books/create' element = {<createBook/>} />
      <Route path = '/books/details/:id' element = {<showBook/>} />
      <Route path = '/books/delete/:id' element = {<deleteBook/>} />
      <Route path = '/books/edit/:id' element = {<editBook/>} />
    </Routes> 
  )
}

export default App