import { Router } from 'express';
import { Request, Response } from "express";
import Expense, { IExpense } from '../models/Expense';
import { getCurrentTime } from '../utils/time';


const addExpense = async (req: Request, res: Response): Promise<void> => {
    try{
        const newExpense: IExpense = new Expense({
            amount: req.body.amount,
            category: req.body.category,
            time: getCurrentTime()
        })
        const addedExpense: IExpense = await newExpense.save();
        res.send(addedExpense);
    }
    catch(err){
        res.status(400).send(err);
    }
    
}

export { addExpense }