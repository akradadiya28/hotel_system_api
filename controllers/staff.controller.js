import staffModel from "../models/staff.model.js";

export const getStaff = async (req, res) => {
    const staffs = await staffModel.find().populate('role');
    console.log(staffs);

    res.json(staffs);
}

export const addStaff = async (req, res) => {
    const { name, role, phone, email, salary, hireDate } = req.body;
    try {
        const staff = await staffModel({
            name,
            role,
            phone,
            email,
            salary,
            hireDate
        });
        console.log(staff);

        await staff.save();
        res.status(200).json({
            "msg": "Staff added successfully",
            "data": staff
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}       