import express from 'express';
const menuRouter = express.Router();
import { getMenu, addMenu } from '../controllers/menu.controller.js';

menuRouter.get('/menus', getMenu);
menuRouter.post('/menus', addMenu);

export default menuRouter