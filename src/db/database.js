// src/db/database.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
  return open({
    filename: './src/db/personal_finance_manager.db',
    driver: sqlite3.Database
  });
}

export async function initializeDb() {
  const db = await openDb();
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS income (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      source TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS expense (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      category TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

}
