import React, { useState } from 'react'
import {Box, Button, styled,Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useContext } from 'react';
import {Usercontext} from '../../context/Dataprovide'
import { useNavigate } from 'react-router-dom';



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
  const [user,setUser]=useState({})
  const {SetAccount}=useContext(Usercontext)
  const navigate= useNavigate()
    const imageURL ='https://tse4.mm.bing.net/th/id/OIP.-13b2HDEo9NYyv0QpDMktQHaE7?r=0&pid=Api&P=0&h=180'
   


    function changehandler(e){
            setSignupdata({...signupdata,[e.target.name]:e.target.value})
            // console.log(e.target.name,e.target.value);
            
    }

    function submitsignup(e){
      e.preventDefault()
      if(login==='login'){
        // console.log("hi");
        
       axios.post('http://localhost:5000/login/user',signupdata)
      .then(res=>{setUser(res.data)
        // console.log(res.data);
          SetAccount({email:user.data.email,username:user.data.username})
          navigate('/')
      })
      .catch(err=>console.log(err))
      // console.log(user.message);
      
      }else{
      // console.log(signupdata);
      axios.post('http://localhost:5000/user',signupdata)
      .then(res=>alert('data inserted'))
      .catch(err=>console.log(err))
      
      togglelogin('login')
      }
    }

  return (
    <>
    <div style={{marginTop:'60px'}}>

     <Component>
      <Box>
        <Image src={imageURL} alt="Login" />
        { login=="login"?
              <Wrapper>
              <TextField id="standard-basic" label="Email" variant="standard" name='email' onChange={(e)=>changehandler(e)} />
              <TextField id="standard-basic" label="Password" variant="standard" name='password' onChange={(e)=>changehandler(e)}/>
                {!user.data &&
              <Typography style={{textAlign:'center', color:'red'}}>{user.message}</Typography>
                
                }
              <Button variant="contained" onClick={submitsignup}>LOGIN</Button>
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
    </div>
    </>
  )
}

export default Login