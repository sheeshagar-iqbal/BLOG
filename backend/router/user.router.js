const express =require('express')
const { postuser, getuser, putuser, deleteuser, getuserbyid, getusersort } = require('../controller/user.controller')
const router =express.Router()

router.post('/user',postuser)
router.get('/user',getuser)
router.get('/user/sort',getusersort)
router.get('/user/:id',getuserbyid)
router.put('/user/:id',putuser)
router.delete('/user/:id',deleteuser)

module.exports =router