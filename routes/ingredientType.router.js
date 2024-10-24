import express from 'express';
const ingredientTypeRouter = express.Router();
import { getIngredientType, addIngredientType } from '../controllers/ingredientType.controller.js';

ingredientTypeRouter.get('/ingredientTypes', getIngredientType);
ingredientTypeRouter.post('/ingredientTypes', addIngredientType);

export default ingredientTypeRouter;