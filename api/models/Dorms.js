import mongoose from "mongoose";

const DormsSchema = new mongoose.Schema({
    dorm_title: {
        type: String,
        required: true,
    },
    dorm_message: {
        type: String,
        required: true,
    },
    dorm_check: {
        type: String,
        required: true,
    },
    dorm_priceLowSeason: {
        type: Number,
        required: true,
    },
    dorm_priceHighSeason: {
        type: Number,
        required: true,
    },
    dorm_photo: {
        type: [String],
    }
});

export default mongoose.model("Dorms", DormsSchema);