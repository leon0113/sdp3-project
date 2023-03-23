import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        products: [
            {
                type: mongoose.ObjectId,
                ref: "users",
            },
        ],
        payment: {},
        buyer: {
            type: mongoose.ObjectId,
            ref: "productCollection",
        },
        status: {
            type: String,
            default: "Not Process",
            enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);