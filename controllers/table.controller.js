import tableModel from "../models/table.model.js";

export const getTable = async (req, res) => {
    try {
        const tables = await tableModel.find({});
        res.status(200).json({
            "msg": "Tables fetched successfully",
            "data": tables
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}

export const addTable = async (req, res) => {
    const { tableNumber, capacity } = req.body;
    try {
        const table = await tableModel({
            tableNumber,
            capacity
        });
        console.log(table);

        await table.save();
        res.status(200).json({
            "msg": "Table added successfully",
            "data": table
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}

