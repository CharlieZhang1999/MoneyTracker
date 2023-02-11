import { Router } from 'express';
import { Request, Response } from "express";
import Expense, { IExpense } from '../models/Expense';
import { getCurrentTime } from '../utils/time';
import { addExpense } from '../controllers/AddExpenseController';
import { getAllExpense, getExpenseSummary } from '../controllers/GetExpenseController';

const router: Router = Router();

router.get('/', getAllExpense)

router.get('/all', getExpenseSummary)

router.post('/', addExpense);

export default router;