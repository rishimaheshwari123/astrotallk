const orderModel = require("../models/orderModle");
const appointmentModel = require("../models/appoinmentModel");

const createOrderCtrl = async (req, res) => {
    try {
        const { product, addressData, user, total, paymentInfo } = req.body;

        if (!product || product.length === 0) {
            return res.status(400).json({ message: "Cart items are required" });
        }
        if (!addressData) {
            return res.status(400).json({ message: "Address data is required" });
        }
        if (!user) {
            return res.status(400).json({ message: "User information is required" });
        }
        if (!total || total <= 0) {
            return res.status(400).json({ message: "Total amount must be greater than zero" });
        }

        const newOrder = new orderModel({
            product,
            addressData,
            total,
            paymentInfo,
        });

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            newOrder,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getAllOrderCtrl = async (req, res) => {
    try {
        const orders = await orderModel.find();
        return res.status(200).json({
            success: true,
            orders
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting  orders API!",
        });
    }
}
const getOrderForUserCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orderModel.find({ "user._id": id });
        return res.status(200).json({
            success: true,
            order
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting  order API!",
        });
    }
}
const updateOrderStatusCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const { newStatus } = req.body;

        // Find the order first
        const order = await orderModel.findById(id);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found!",
            });
        }

        // Update order status
        order.status = newStatus;

        // If status is "Delivered", update paymentInfo.status to "Paid"
        if (newStatus === "Delivered") {
            order.paymentInfo.status = "Paid";
        }

        // Save the updated order
        await order.save();

        return res.status(200).json({
            success: true,
            message: "Order status updated successfully!",
            order
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error updating order status!",
        });
    }
};
const returnAndRefundCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const { returnReason, upiId } = req.body;

        const refund = await orderModel.findByIdAndUpdate(
            id,
            { returnReason, upiId, status: "Cancel" },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Order cancelled successfully!",
            refund
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error cancelling order!",
        });
    }
};


const getAllAppointmentCtrl = async (req, res) => {
    try {
        const appointment = await appointmentModel.find();
        return res.status(200).json({
            success: true,
            appointment
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting  appointmentModel API!",
        });
    }
}



module.exports = { getAllAppointmentCtrl, createOrderCtrl, getAllOrderCtrl, getOrderForUserCtrl, updateOrderStatusCtrl, returnAndRefundCtrl };
