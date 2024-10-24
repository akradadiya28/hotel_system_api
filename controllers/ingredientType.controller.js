import ingredientTypeModel from "../models/ingredientType.model.js";

export const getIngredientType = async (req, res) => {
    try {
        const ingredientTypes = await ingredientTypeModel.find();
        res.status(200).json(ingredientTypes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addIngredientType = async (req, res) => {
    const { name, description } = req.body;
    try {
        const ingredientType = await ingredientTypeModel({
            name,
            description
        });
        console.log(ingredientType);

        await ingredientType.save();
        res.status(201).json(ingredientType);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}   