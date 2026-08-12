import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export    const Usercontext =createContext(null)
 
const Dataprovide = ({children}) => {
    const [account,SetAccount]=useState({username:'',email:''})
  return (
    <>
    <Usercontext.Provider value={{account,SetAccount}}>
     {children}
    </Usercontext.Provider>
    </>
  )
}

export default Dataprovide