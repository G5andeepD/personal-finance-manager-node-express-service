// src/controllers/summaryController.js

import * as SummaryModel from '../models/summary.js';

export async function getSummary(req, res) {
  try {
    const summary = await SummaryModel.getSummary();
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
