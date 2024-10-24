import express from 'express';
const staffRoleRouter = express.Router();
import { getStaffRole, addStaffRole } from '../controllers/staffRole.controller.js';

staffRoleRouter.get('/staffRoles', getStaffRole);
staffRoleRouter.post('/staffRoles', addStaffRole);

export default staffRoleRouter;