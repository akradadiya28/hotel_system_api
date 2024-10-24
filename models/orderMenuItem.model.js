import mongoose from "mongoose";

const orderMenuItemSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const OrderMenuItem = mongoose.model('OrderMenuItem', orderMenuItemSchema);
export default OrderMenuItem;
