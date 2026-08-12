import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export    const Usercontext =createContext(null)
 
const Dataprovide = ({children}) => {
    const [account,SetAccount]=useState({username:'',email:''})
    const [user,setUser] =useState(false)
  return (
    <>
    <Usercontext.Provider value={{account,SetAccount,user,setUser}}>
     {children}
    </Usercontext.Provider>
    </>
  )
}

export default Dataprovide