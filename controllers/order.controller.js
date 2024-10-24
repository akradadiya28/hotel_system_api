import orderModel from "../models/order.model.js";

export const getOrder = async (req, res) => {

    try {
        const order = await orderModel.find({}).populate('customer').populate('table').populate('item');
        console.log(order);

        res.status(200).json({
            "msg": "Order fetched successfully",
            "data": order
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}

export const addOrder = async (req, res) => {
    const { customer, table, item, quantity, totalAmount, status } = req.body;
    try {
        const order = await orderModel({
            customer,
            table,
            item,
            quantity,
            totalAmount,
            status
        });
        console.log(order);
        await order.save();
        res.status(200).json({
            "msg": "Order added successfully",
            "data": order
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}   