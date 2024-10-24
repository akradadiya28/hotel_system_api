import express from 'express';
const menuItemIngredientRouter = express.Router();
import { getMenuItemIngredient, addMenuItemIngredient } from '../controllers/menuItemIngredient.controller.js';

menuItemIngredientRouter.get('/menuItemIngredients', getMenuItemIngredient);
menuItemIngredientRouter.post('/menuItemIngredients', addMenuItemIngredient);

export default menuItemIngredientRouter;