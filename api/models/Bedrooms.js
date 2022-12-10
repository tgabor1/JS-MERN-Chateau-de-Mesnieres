import mongoose from "mongoose";

const BedroomsSchema = new mongoose.Schema({
    bedroom_title: {
        type: String,
        required: true,
    },
    bedroom_message: {
        type: String,
        required: true,
    },
    bedroom_check: {
        type: String,
        required: true,
    },
    bedroom_priceLowSeason: {
        type: Number,
        required: true,
    },
    bedroom_priceHighSeason: {
        type: Number,
        required: true,
    },
    bedroom_photo: {
        type: [String],
    }
});

export default mongoose.model("Bedrooms", BedroomsSchema);