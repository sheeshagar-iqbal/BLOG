const express =require('express')
const { postblog } = require('../controller/blog.controller')

const router =express.Router()



router.post('/blog',postblog)
// router.get('/user',)
// router.get('/user/sort',)
// router.get('/user/:id',)
// router.put('/user/:id',)
// router.delete('/user/:id',)

module.exports =router