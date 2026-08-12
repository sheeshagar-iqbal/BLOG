import React from 'react'
import {Usercontext} from '../../context/Dataprovide'
import { useContext } from 'react'
import Bannner from '../banner/Bannner'
import Category from './Category'
import { Grid } from '@mui/material'

const Home = () => {
    const {account}=useContext(Usercontext)
  return (
    <>
    <h2>{account.email}</h2>
    <Bannner/>

   <Grid container>
     <Grid container lg={2} sm={2} xs={12}>
    <Category/>
    </Grid>
    <Grid container  lg={10} sm={10} xs={12}>
        post
    </Grid>
   </Grid>
    </>
  )
}

export default Home