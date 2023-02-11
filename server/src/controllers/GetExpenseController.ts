import { Router } from 'express';
import { Request, Response } from "express";
import Expense, { IExpense } from '../models/Expense';
import { getCurrentTime } from '../utils/time';

const getExpenseSummary = async (req: Request, res: Response): Promise<void> =>{
    // Todo: do the db find and sum the five category here
    try{
        const categorysum = await Expense.aggregate([
            {
            $group:{
                _id: "$category",
                total:{ $sum: "$amount"}
            }
        }]);
        res.send(categorysum);
    }
    catch(err){
        res.status(400).send(err);
    }
}

const getAllExpense = async (req: Request, res: Response): Promise<void> => {
    try{
        const expenseDetail = await Expense.find().sort({ time: -1 });

        res.send(expenseDetail);
    }
    catch(err){
        res.status(400).send(err);
    };
}

export { getExpenseSummary, getAllExpense }