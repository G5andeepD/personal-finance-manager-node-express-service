// src/models/expense.js

import { openDb } from '../db/database.js';

export async function getAllExpenses() {
  const db = await openDb();
  return db.all('SELECT * FROM expense ORDER BY timestamp ASC');
}

export async function getExpenseById(id) {
  const db = await openDb();
  return db.get('SELECT * FROM expense WHERE id = ?', [id]);
}

export async function addExpense(amount, category) {
  const db = await openDb();
  const result = await db.run(
    'INSERT INTO expense (amount, category) VALUES (?, ?)',
    [amount, category]
  );
  return getExpenseById(result.lastID);
}

export async function updateExpense(id, amount, category) {
  const db = await openDb();
  await db.run(
    'UPDATE expense SET amount = ?, category = ? WHERE id = ?',
    [amount, category, id]
  );
  return getExpenseById(id);
}

export async function deleteExpense(id) {
  const db = await openDb();
  return db.run('DELETE FROM expense WHERE id = ?', [id]);
}
