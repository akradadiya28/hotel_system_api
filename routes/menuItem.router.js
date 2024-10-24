import express from 'express';
const menuItemRouter = express.Router();
import { getMenuItem, addMenuItem } from '../controllers/menuItem.controller.js';

menuItemRouter.get('/menuItems', getMenuItem);
menuItemRouter.post('/menuItems', addMenuItem);

export default menuItemRouter;