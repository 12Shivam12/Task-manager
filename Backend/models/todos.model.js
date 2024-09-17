import mongoose from "mongoose";

const todosScehma = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    userId:{
        type: String,
    }
})

const Todo = mongoose.model('Todo',todosScehma);

export default Todo;