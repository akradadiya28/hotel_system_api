import mongoose from "mongoose";

const ingredientTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: { type: String }
});

const IngredientType = mongoose.model('IngredientType', ingredientTypeSchema);

export default IngredientType;
