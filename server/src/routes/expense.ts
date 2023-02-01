import { Router } from 'express';
import { Request, Response } from "express";
import Expense, { IExpense } from '../models/Expense';

const router: Router = Router();
router.get('/', (req, res) => {
    res.send('Hello');}
)

router.get('/all', async (req: Request, res: Response) =>{
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
})

router.get('/bills', async (req: Request, res: Response) =>{
    // Todo: do the db find and sum the five category here
    try{
        const categorysum = await Expense.aggregate([
            {
                $match:{
                    category: "Bills"
                }
            },
            {
            $group:{
                _id : null,
                total:{ $sum: "$amount"}
            }
        }]);
        res.send({ 
            amount: categorysum[0].total,
            category: "Bills"
        });
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.get('/grocery', async (req: Request, res: Response) =>{
    // Todo: do the db find and sum the five category here
    try{
        const categorysum = await Expense.aggregate([
            {
                $match:{
                    category: "Grocery"
                }
            },
            {
            $group:{
                _id : null,
                total:{ $sum: "$amount"}
            }
        }]);
        res.send({ 
            amount: categorysum[0].total,
            category: "Grocery"
        });
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.get('/health', async (req: Request, res: Response) =>{
    // Todo: do the db find and sum the five category here
    try{
        const categorysum = await Expense.aggregate([
            {
                $match:{
                    category: "Health"
                }
            },
            {
            $group:{
                _id : null,
                total:{ $sum: "$amount"}
            }
        }]);
        res.send({ 
            amount: categorysum[0].total,
            category: "Health"
        });
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.get('/travel', async (req: Request, res: Response) =>{
    // Todo: do the db find and sum the five category here
    try{
        const categorysum = await Expense.aggregate([
            {
                $match:{
                    category: "Travel"
                }
            },
            {
            $group:{
                _id : null,
                total:{ $sum: "$amount"}
            }
        }]);
        res.send({ 
            amount: categorysum[0].total,
            category: "Travel"
        });
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.get('/others', async (req: Request, res: Response) =>{
    // Todo: do the db find and sum the five category here
    try{
        const categorysum = await Expense.aggregate([
            {
                $match:{
                    category: "Others"
                }
            },
            {
            $group:{
                _id : null,
                total:{ $sum: "$amount"}
            }
        }]);
        res.send({ 
            amount: categorysum[0].total,
            category: "Others"
        });
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.post('/', async (req: Request, res: Response) => {
    // Todo: move this to controller
    try{
        const newExpense: IExpense = new Expense({
            amount: req.body.amount,
            category: req.body.category,
            time: req.body.time
        })
        const addedExpense = await newExpense.save();
        res.send(addedExpense);
    }
    catch(err){
        res.status(400).send(err);
    }
    
})

export default router;