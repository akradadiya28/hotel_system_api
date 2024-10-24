import express from 'express';
const bookingRouter = express.Router();
import { getBooking, addBooking } from '../controllers/booking.controller.js';

bookingRouter.get('/bookings', getBooking);
bookingRouter.post('/bookings', addBooking);


export default bookingRouter