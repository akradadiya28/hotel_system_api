import express from 'express';
const orderMenuRouter = express.Router();
import { getOrderMenu, addOrderMenu } from '../controllers/orderMenu.controller.js';

orderMenuRouter.get('/orderMenus', getOrderMenu);
orderMenuRouter.post('/orderMenus', addOrderMenu);

export default orderMenuRouter