import express from 'express';
const router = express.Router();
import customerRouter from './customer.router.js';
import tableRouter from './table.router.js';
import bookingRouter from './booking.router.js';
import staffRouter from './staff.router.js';
import staffRoleRouter from './staffRole.router.js';
import orderRouter from './order.router.js';
import orderMenuRouter from './orderMenu.router.js';
import menuRouter from './menu.router.js';
import menuItemRouter from './menuItem.router.js';
import ingredientTypeRouter from './ingredientType.router.js';
import ingredientRouter from './ingredient.router.js';
import menuItemIngredientRouter from './menuItemIngredient.router.js';

router.use('/v1', customerRouter)
router.use('/v1', tableRouter)
router.use('/v1', bookingRouter)
router.use('/v1', staffRouter)
router.use('/v1', staffRoleRouter)
router.use('/v1', orderRouter)
router.use('/v1', orderMenuRouter)
router.use('/v1', menuRouter)
router.use('/v1', menuItemRouter)
router.use('/v1', ingredientTypeRouter)
router.use('/v1', ingredientRouter)
router.use('/v1', menuItemIngredientRouter)

export default router;            