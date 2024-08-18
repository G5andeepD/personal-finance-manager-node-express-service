// src/controllers/expenseController.js

import * as ExpenseModel from '../models/expense.js';

export async function getAllExpenses(req, res) {
  try {
    const expenses = await ExpenseModel.getAllExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getExpenseById(req, res) {
  try {
    const { id } = req.params;
    const expense = await ExpenseModel.getExpenseById(id);
    if (expense) {
      res.status(200).json(expense);
    } else {
      res.status(404).json({ error: 'Expense entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addExpense(req, res) {
  try {
    const { amount, category } = req.body;
    const newExpense = await ExpenseModel.addExpense(amount, category);
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateExpense(req, res) {
  try {
    const { id } = req.query;
    const { amount, category } = req.body;
    const updatedExpense = await ExpenseModel.updateExpense(id, amount, category);
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteExpense(req, res) {
  try {
    const { id } = req.query;
    await ExpenseModel.deleteExpense(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
