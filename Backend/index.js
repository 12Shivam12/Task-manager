import { configDotenv } from "dotenv";
import express from 'express'
import connectDB from "./db/db.js";
import cors from 'cors';
import authRoutes from './routes/auth.route.js'
import todosRoutes from './routes/todos.route.js'
import cookieParser from 'cookie-parser';

const app = express();

configDotenv();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001',credentials:true }
));
app.use(cookieParser());

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);

        app.listen(8080, () => {
            console.log('server is running at 8080');
        })
    } catch (error) {
        console.log('Failed to connect the database');
    }
}

startServer();

app.use('/api/auth',authRoutes);
app.use('/api/todos',todosRoutes);


app.get('/', (req, res) => {
    res.send('Hello world');
})