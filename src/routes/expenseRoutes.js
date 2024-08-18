// src/routes/expenseRoutes.js

import express from 'express';
import * as expenseController from '../controllers/expenseController.js';

const router = express.Router();

router.get('/', expenseController.getAllExpenses);
router.get('/:id', expenseController.getExpenseById);
router.post('/', expenseController.addExpense);
router.put('/', expenseController.updateExpense);
router.delete('/', expenseController.deleteExpense);

export default router;
