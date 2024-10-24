import express from 'express';
import { addCustomer, getCustomer } from '../controllers/customer.controller.js';
const customerRouter = express.Router();

customerRouter.get('/customers', getCustomer);
customerRouter.post('/customers', addCustomer);

export default customerRouter;