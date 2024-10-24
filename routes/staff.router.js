import express from 'express';
const staffRouter = express.Router();
import { getStaff, addStaff } from '../controllers/staff.controller.js';

staffRouter.get('/staffs', getStaff);
staffRouter.post('/staffs', addStaff);

export default staffRouter;