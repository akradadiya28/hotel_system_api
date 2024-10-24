import mongoose from "mongoose";

const staffRoleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        unique: true
    },  // Example: "Manager", "Chef", etc.
    description: { type: String }
});

const StaffRole = mongoose.model('StaffRole', staffRoleSchema);

export default StaffRole;
