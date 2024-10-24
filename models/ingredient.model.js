import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IngredientType',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    supplier: { type: String },
    lastRestocked: { type: Date }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;
