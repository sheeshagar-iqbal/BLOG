import React from 'react'
import { Box,Typography } from '@mui/material'
const Getpost = () => {
    const img= 'https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
  return (
    <>
    <Box>
        <img src={img} alt="" />
        <Typography>music</Typography>
        <Typography>sayar hu </Typography>
        <Typography>iqbal</Typography>
        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam perferendis odio ipsam possimus nesciunt. Dolor error quam quis odio laborum!</Typography>
    </Box>
    </>
  )
}

export default Getpost