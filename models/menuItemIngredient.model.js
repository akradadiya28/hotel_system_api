import mongoose from "mongoose";

const menuItemIngredientSchema = new mongoose.Schema({
    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
        required: true
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
    },
    quantityUsed: {
        type: Number,
        required: true
    }
});

const MenuItemIngredient = mongoose.model('MenuItemIngredient', menuItemIngredientSchema);

export default MenuItemIngredient;