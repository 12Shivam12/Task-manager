import mongoose from "mongoose";

const connectDB = async (connectionString) => {
    if (!connectionString) {
        throw new Error('MONGODB_URL is not defined in environment variables');
    }
    try {
        await mongoose.connect(connectionString)
        console.log('DB connected');
    } catch (error) {
        console.log('DB connection error',error);
    }
}

export default connectDB;