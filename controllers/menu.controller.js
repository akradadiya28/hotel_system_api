import menuModel from "../models/menu.model.js";

export const getMenu = async (req, res) => {
    try {
        const menus = await menuModel.find({}).populate('items');
        res.status(200).json(menus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addMenu = async (req, res) => {
    const { name, description, availableTime, items } = req.body;
    try {
        const menu = await menuModel({
            name,
            description,
            availableTime,
            items
        });
        await menu.save();
        res.status(201).json(menu);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}   
