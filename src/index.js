// src/index.js

import express from 'express';
import bodyParser from 'body-parser';
import { initializeDb } from './db/database.js';
import incomeRoutes from './routes/incomeRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import summaryRoutes from './routes/summaryRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Initialize Database
initializeDb().then(() => {
  console.log('Database initialized');
});

// Base Path
const basePath = '/api/v1';

// Routes
app.use(`${basePath}/income`, incomeRoutes);
app.use(`${basePath}/expense`, expenseRoutes);
app.use(`${basePath}/summary`, summaryRoutes);

// Placeholder route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Personal Finance Manager API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
