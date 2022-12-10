import mongoose from "mongoose";

const BreakfastSchema = new mongoose.Schema({
    breakfast_beverage: {
        type: Array,
        required: true,
    },
    breakfast_dairies: {
        type: Array,
        required: true,
    },
    breakfast_pastries: {
        type: Array,
        required: true,
    },
    breakfast_others: {
        type: Array,
        required: true,
    },
    breakfast_meat: {
        type: Array,
        required: true,
    },
    breakfast_fruits: {
        type: Array,
        required: true,
    },
    breakfast_price: {
        type: Number,
        required: true,
    }
});

export default mongoose.model("Breakfast", BreakfastSchema);