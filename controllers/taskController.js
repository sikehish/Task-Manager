const Task = require('../models/taskModel.js')

exports.getAllTasks= async (req,res)=>{
    try{
        const tasks= await Task.find();
        res.status(200).json({
            status: 'Success',
            results:tasks.length,
            data:{
                tasks
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

 exports.createTask= async (req,res)=>{
    try{
        const task= await Task.create(req.body)
        res.status(201).json({
            status: 'Successfully Created',
            data:{
                task
            }
        })
    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
    
}

 exports.updateTask= async (req,res)=>{
    try{
        const task= await Task.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status: 'Successfully Updated',
            data:{
                task
            }
        })
    } catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

 exports.deleteTask=async (req,res)=>{
    try{
        const task= await Task.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'Successfully Deleted',
            data:{
                task
            }
        })
    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}

 exports.getTask= async(req,res)=>{
    try{
        const task= await Task.findById(req.params.id)
        console.log(req.body)
        res.status(200).json({
            status: 'Success',
            data:{
                task
            }
        })
    } catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

 