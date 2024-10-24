import express from 'express';
const orderRouter = express.Router();
import { getOrder, addOrder } from '../controllers/order.controller.js';

orderRouter.get('/orders', getOrder);
orderRouter.post('/orders', addOrder);

export default orderRouter