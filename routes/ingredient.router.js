import express from 'express';
const ingredientRouter = express.Router();
import { getIngredient, addIngredient } from '../controllers/ingredient.controller.js';

ingredientRouter.get('/ingredients', getIngredient);
ingredientRouter.post('/ingredients', addIngredient);

export default ingredientRouter;