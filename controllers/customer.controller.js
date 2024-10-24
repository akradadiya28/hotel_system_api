import customerModel from "../models/customer.model.js";

export const getCustomer = async (req, res) => {

    try {
        const customer = await customerModel.find();
        res.status(200).json({
            "msg": "Customer fetched successfully",
            "data": customer
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}

export const addCustomer = async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
        const customer = await customerModel({
            name,
            email,
            phone,
            address
        });
        // console.log(customer);

        await customer.save();

        res.status(200).json({
            "msg": "Customer added successfully",
            "data": customer
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}