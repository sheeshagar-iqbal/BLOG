import React from 'react'
import Login from './components/account/Login'
import { Route, Routes } from 'react-router-dom'
import Show from './components/show/Show'

const App = () => {
  return (
    <>
    {/* <div style={{marginTop:'60px'}}>
      <Login/> 
      </div>  */}

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
    </>
  )
}

export default App