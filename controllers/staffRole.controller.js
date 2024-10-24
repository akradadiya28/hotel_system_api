import staffRoleModel from "../models/staffRole.model.js";

export const getStaffRole = async (req, res) => {
    try {
        const staffRoles = await staffRoleModel.find();
        res.status(200).json({
            "msg": "Roles fetched successfully",
            "data": staffRoles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}

export const addStaffRole = async (req, res) => {
    const { role, description } = req.body;
    try {
        const staffRole = await staffRoleModel({
            role,
            description
        });
        console.log(staffRole);

        await staffRole.save();
        res.status(200).json({
            "msg": "StaffRole added successfully",
            "data": staffRole
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}