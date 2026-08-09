import React, { useState } from 'react'
import {Box, Button, styled,Typography} from '@mui/material';
import TextField from '@mui/material/TextField';




 const Component = styled(Box)`
    width:350px;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
    border-radius:10px;
    padding:20px;
    `

    const Image = styled('img')({
      width:'100',
      margin:'auto',
      display:'flex',
      padding:"10px 0 0"
    })

    const Wrapper =styled(Box)`
       display:flex;
       flex-direction:column;
       & >div,& >button,&>p{
       margin-top:10px
       }
    `
const Login = () => {

  const [login,togglelogin]=useState('login')
  const [signupdata,setSignupdata]=useState({})
    const imageURL ='https://tse4.mm.bing.net/th/id/OIP.-13b2HDEo9NYyv0QpDMktQHaE7?r=0&pid=Api&P=0&h=180'
   


    function changehandler(e){
            setSignupdata({...signupdata,[e.target.name]:e.target.value})
            console.log(e.target.name,e.target.value);
            
    }

    function submitsignup(){
      // e.preventDefault()
      console.log(signupdata);
      
    }

  return (
    <>
     <Component>
      <Box>
        <Image src={imageURL} alt="Login" />
        { login=="login"?
              <Wrapper>
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField id="standard-basic" label="Password" variant="standard" />
              <Button variant="contained">LOGIN</Button>
              <Typography style={{textAlign:'center'}}>OR</Typography>
              <Button onClick={()=>togglelogin('signup')}>CREATE AN ACCOUNT</Button>
              </Wrapper>
        :
              <Wrapper>
              <TextField id="standard-basic" label="Username" name='username' variant="standard" onChange={(e)=>changehandler(e)} />
              <TextField id="standard-basic" label="Email" name='email' variant="standard" onChange={(e)=>changehandler(e)} />
              <TextField id="standard-basic" label="Password" name='password' variant="standard" onChange={(e)=>changehandler(e)}/>
              <Button variant="contained" onClick={submitsignup} >Signup</Button>
              <Typography style={{textAlign:'center'}}>OR</Typography>
              <Button onClick={()=>togglelogin('login')}>Already have an account</Button>
              </Wrapper>
}
        </Box>
    </Component>
    </>
  )
}

export default Login