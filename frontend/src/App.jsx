import React from 'react'
import Login from './components/account/Login'
import { Route, Routes } from 'react-router-dom'
import Show from './components/show/Show'
import Dataprovide from './context/Dataprovide'
import Home from './components/home/Home'
import Header from './components/header/Header'
const App = () => {
  return (
    <>
      <Dataprovide>
        <Header/>
         <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </Dataprovide>

     
    </>
  )
}

export default App