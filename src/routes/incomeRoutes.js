// src/routes/incomeRoutes.js

import express from 'express';
import * as incomeController from '../controllers/incomeController.js';

const router = express.Router();

router.get('/', incomeController.getAllIncomes);
router.get('/:id', incomeController.getIncomeById);
router.post('/', incomeController.addIncome);
router.put('/', incomeController.updateIncome);
router.delete('/', incomeController.deleteIncome);

export default router;
