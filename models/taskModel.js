const mongoose=require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, ' Enter the name of the task'],
        trim: true,
        maxlength: [15, 'Shorten the name'],
    },
    taskCompleted: {
       type: Boolean,
       default: false
    }
})

const Task= mongoose.model('Task', taskSchema);

module.exports= Task;