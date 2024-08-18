// src/models/income.js

import { openDb } from '../db/database.js';

export async function getAllIncomes() {
  const db = await openDb();
  return db.all('SELECT * FROM income ORDER BY timestamp DESC');
}

export async function getIncomeById(id) {
  const db = await openDb();
  return db.get('SELECT * FROM income WHERE id = ?', [id]);
}

export async function addIncome(amount, source) {
  const db = await openDb();
  const result = await db.run(
    'INSERT INTO income (amount, source) VALUES (?, ?)',
    [amount, source]
  );
  return getIncomeById(result.lastID);
}

export async function updateIncome(id, amount, source) {
  const db = await openDb();
  await db.run(
    'UPDATE income SET amount = ?, source = ? WHERE id = ?',
    [amount, source, id]
  );
  return getIncomeById(id);
}

export async function deleteIncome(id) {
  const db = await openDb();
  return db.run('DELETE FROM income WHERE id = ?', [id]);
}
