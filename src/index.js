// src/index.js

import express from 'express';
import bodyParser from 'body-parser';
import { initializeDb } from './db/database.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Initialize Database
initializeDb().then(() => {
  console.log('Database initialized');
});

// Placeholder routes
app.get('/', (req, res) => {
  res.send('Welcome to the Personal Finance Manager API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
