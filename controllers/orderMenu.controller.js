import orderMenuItemModel from "../models/orderMenuItem.model.js";

export const getOrderMenu = async (req, res) => {
    try {
        const orderMenu = await orderMenuItemModel.find({}).populate('order').populate('menuItem');
        console.log(orderMenu);

        res.status(200).json(orderMenu);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addOrderMenu = async (req, res) => {
    const { order, menuItem, quantity } = req.body;

    try {
        const orderMenu = await orderMenuItemModel({
            order,
            menuItem,
            quantity
        });
        console.log(orderMenu);

        await orderMenu.save();
        res.status(201).json(orderMenu);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}   