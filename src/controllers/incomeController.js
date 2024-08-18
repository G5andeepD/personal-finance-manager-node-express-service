// src/controllers/incomeController.js

import * as IncomeModel from '../models/income.js';

export async function getAllIncomes(req, res) {
  try {
    const incomes = await IncomeModel.getAllIncomes();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getIncomeById(req, res) {
  try {
    const { id } = req.params;
    const income = await IncomeModel.getIncomeById(id);
    if (income) {
      res.status(200).json(income);
    } else {
      res.status(404).json({ error: 'Income entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addIncome(req, res) {
  try {
    const { amount, source } = req.body;
    const newIncome = await IncomeModel.addIncome(amount, source);
    res.status(201).json(newIncome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateIncome(req, res) {
  try {
    const { id } = req.query;
    const { amount, source } = req.body;
    const updatedIncome = await IncomeModel.updateIncome(id, amount, source);
    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteIncome(req, res) {
  try {
    const { id } = req.query;
    await IncomeModel.deleteIncome(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
