import React from 'react'
import {Box, Button, styled} from '@mui/material';
import TextField from '@mui/material/TextField';

const Login = () => {
    const imageURL ='https://tse4.mm.bing.net/th/id/OIP.-13b2HDEo9NYyv0QpDMktQHaE7?r=0&pid=Api&P=0&h=180'
    const Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
    `
  return (
    <>
     <Component>
        <img src={imageURL} alt="Login" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="contained">LOGIN</Button>
        <Button>CREATE AN ACCOUNT</Button>

    </Component>
    </>
  )
}

export default Login