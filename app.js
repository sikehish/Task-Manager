const express= require('express')
const taskRouter= require('./routes/taskRoutes'); 

const app=express();

app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks', taskRouter);
app.use((req,res)=> res.status(404).send('Resource doesnt exist!'))

module.exports=app;
