import express, { Express } from 'express';
import { Request, Response } from "express";
import mongoose from 'mongoose';
import Expense, { IExpense } from './models/Expense';
import { config } from 'dotenv';
config();

const app: Express = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!, () => console.log('Connect to db!'));

// json parse
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello');
})

app.post('/expense', async (req: Request, res: Response) => {
    try{
        const newExpense: IExpense = new Expense({
            amount: req.body.amount,
            category: req.body.category,
            time: req.body.time
        })
        const addedExpense = await newExpense.save();
        console.log("here");
        res.send(addedExpense);
    }
    catch(err){
        res.status(400).send(err);
    }
    
})

app.listen(5000, () => { console.log('app is running on port 5000')});
