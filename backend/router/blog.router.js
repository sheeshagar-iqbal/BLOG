const express =require('express')
const { postblog, getblog, getblogbyid } = require('../controller/blog.controller')

const router =express.Router()



router.post('/blog',postblog)
router.get('/blog',getblog)
// router.get('/user/sort',)
router.get('/blog/:id',getblogbyid)
// router.put('/user/:id',)
// router.delete('/user/:id',)

module.exports =router