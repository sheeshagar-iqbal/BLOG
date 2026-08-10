const usermodel= require('../model/user.model')

 async function postuser(req,res){
            let data = await usermodel.create(req.body)
            res.json(data)
}

 async function getuser(req,res){
            let data = await usermodel.find()
            res.json(data)
}

 async function getuserbyid(req,res){
            let data = await usermodel.findById(req.params.id)
            res.json(data)
}
 async function getusersort(req,res){
            let sorted = req.params.name =='asc'?1:-1
            let data = await usermodel.find().sort({username:sorted})
            res.json(data)
}

 async function putuser(req,res){
            let data = await usermodel.findByIdAndUpdate(req.params.id,req.body)
            res.json(data)
}

 async function deleteuser(req,res){
            let data = await usermodel.findByIdAndDelete(req.params.id)
            res.json(data)
}

module.exports ={postuser,getuser,putuser,deleteuser,getuserbyid,getusersort}