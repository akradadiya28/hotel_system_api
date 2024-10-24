import ingrdientModel from "../models/ingredient.model.js";

export const getIngredient = async (req, res) => {
    try {
        const ingredients = await ingrdientModel.find({}).populate('type');
        console.log(ingredients);

        res.status(200).json(ingredients);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addIngredient = async (req, res) => {
    const { name, type, quantity, unit, supplier, lastRestocked } = req.body;
    try {
        const ingredient = await ingrdientModel({
            name,
            type,
            quantity,
            unit,
            supplier,
            lastRestocked: new Date()
        });
        console.log(ingredient);

        await ingredient.save();
        res.status(201).json(ingredient);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
