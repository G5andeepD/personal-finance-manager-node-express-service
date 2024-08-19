// src/models/summary.js

import { openDb } from '../db/database.js';

export async function getSummary() {
  const db = await openDb();

  const totalIncome = await db.get('SELECT SUM(amount) AS totalIncome FROM income');
  const totalExpenses = await db.get('SELECT SUM(amount) AS totalExpenses FROM expense');

  return {
    totalIncome: totalIncome.totalIncome || 0,
    totalExpenses: totalExpenses.totalExpenses || 0,
    cashInHand: (totalIncome.totalIncome || 0) - (totalExpenses.totalExpenses || 0),
  };
}
