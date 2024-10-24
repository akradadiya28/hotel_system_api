import bookingModel from "../models/booking.model.js";

export const getBooking = async (req, res) => {
    try {
        const booking = await bookingModel.find({}).populate('customer').populate('table');
        console.log(booking);

        res.status(200).json({
            "msg": "Booking fetched successfully",
            "data": booking
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }
}

export const addBooking = async (req, res) => {
    const { customer, table, bookingDate, timeSlot } = req.body;

    try {

        const booking = await bookingModel({
            customer,
            table,
            bookingDate,
            timeSlot
        });
        console.log(booking);

        await booking.save();
        res.status(200).json({
            "msg": "Booking added successfully",
            "data": booking
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            "err": "Internal server error"
        });
    }

}