import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    food_item1: {
        type: String,
        required: true,
    },
    food_item2: {
        type: String,
        required: true,
    },
    food_item3: {
        type: String,
        required: true,
    },
    food_item4: {
        type: String,
        required: true,
    },
    food_item5: {
        type: String,
        required: true,
    },
    food_item6: {
        type: String,
        required: true,
    },
    food_item7: {
        type: String,
        required: true,
    },
    food_item8: {
        type: String,
        required: true,
    },
    food_price: {
        type: Number,
        required: true,
    }
});

export default mongoose.model("Food", FoodSchema);