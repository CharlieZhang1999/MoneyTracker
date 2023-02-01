import express, { Express } from 'express';
import { Request, Response } from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import expenseRoute from './routes/expense'
import { config } from 'dotenv';
config();

const app: Express = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!, () => console.log('Connect to db!'));

// json parse
app.use(express.json());
app.use(cors());
app.use('/expense', expenseRoute);


// app.get('/', (req, res) => {
//     res.send('Hello');
// })

app.listen(5000, () => { console.log('app is running on port 5000')});
