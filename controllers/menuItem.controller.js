import menuItemModel from "../models/menuItem.model.js";

export const getMenuItem = async (req, res) => {
    try {
        const menuItem = await menuItemModel.find();
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addMenuItem = async (req, res) => {
    const { name, description, price, category } = req.body;
    try {
        const menuItem = await menuItemModel({
            name,
            description,
            price,
            category
        });
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

