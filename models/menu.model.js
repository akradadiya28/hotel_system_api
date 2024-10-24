import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { type: String },
    availableTime: {
        type: String,
        required: true
    },  // Example: "9 AM - 11 AM"
    items: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem'
    }
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
