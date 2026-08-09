const express=require('express')
const app =express()
require('./config/db')
const dotenv = require('dotenv')
dotenv.config()

app.listen(process.env.port,()=>console.log(`server is running ${process.env.port}`))