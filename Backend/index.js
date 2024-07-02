import { configDotenv } from "dotenv";
import express from 'express'
import connectDB from "./db/db.js";

const app = express();

configDotenv();

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);

        app.listen(3000, () => {
            console.log('server is running at 3000');
        })
    } catch (error) {
        console.log('Failed to connect the database');
    }
}

startServer();

app.get('/', (req, res) => {
    res.send('Hello world');
})