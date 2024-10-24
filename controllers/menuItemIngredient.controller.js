import menuItemIngredientModel from "../models/menuItemIngredient.model.js";

export const getMenuItemIngredient = async (req, res) => {
    try {
        const menuItemIngredient = await menuItemIngredientModel.find({}).populate('menuItem').populate('ingredient');
        console.log(menuItemIngredient);

        res.status(200).json(menuItemIngredient);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addMenuItemIngredient = async (req, res) => {
    const { menuItem, ingredient, quantityUsed } = req.body;
    try {
        const menuItemIngredient = await menuItemIngredientModel({
            menuItem,
            ingredient,
            quantityUsed
        });
        console.log(menuItemIngredient);

        await menuItemIngredient.save();
        res.status(201).json(menuItemIngredient);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}   