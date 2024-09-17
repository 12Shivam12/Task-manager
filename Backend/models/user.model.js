import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },

    email:{
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User',userScehma);

export default User;