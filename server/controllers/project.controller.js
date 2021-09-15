const MySchema = require("../models/project.model")

module.exports = {
    // Read All
    findAll:(req,res)=>{
        MySchema.find({})
            .then(allObjects => {
                console.log("all Objects are --->",allObjects);
                res.json(allObjects)
            })
            .catch(err=>{
                console.log(err)
                res.json({message:"error", error: err})
            })
    },

    // Read One
    findOne:(req,res) =>{
        MySchema.findById(req.params.id)
            .then(oneObj =>{
                console.log("returned object with id", oneObj)
                res.json(oneObj)
            })
            .catch(err=>{
                console.log(err)
                res.json({message:"error", error: err})
            })
    },

    // Create
    create:(req,res)=>{
        MySchema.create(req.body)
            .then((newObj)=>{
                res.json(newObj)
            })
            .catch(err=>{
                console.log(err)
                res.status(400).json(err)
            })

    },

    // Update
    update:(req,res)=>{
        MySchema.findByIdAndUpdate(req.params.id,req.body,
            {new:true, runValidators:true})
            .then(updatedObj=>{
                res.json(updatedObj)
            })
            .catch(err=>{
                console.log(err)
                res.status(400).json(err)
            })
    },

    // Delete
    delete:(req,res)=>{
        MySchema.findByIdAndDelete(req.params.id)
            .then(result=>res.json({result: result}))
            .catch(err=>{
                console.log(err)
                res.json({message:"error", error: err})
            })
    }
}