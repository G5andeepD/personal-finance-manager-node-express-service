// src/routes/summaryRoutes.js

import express from 'express';
import * as summaryController from '../controllers/summaryController.js';

const router = express.Router();

router.get('/', summaryController.getSummary);

export default router;
