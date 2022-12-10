import mongoose from "mongoose";

const RoomsToRentSchema = new mongoose.Schema({
    room_title: {
        type: String,
        required: true,
    },
    room_message: {
        type: String,
        required: true,
    },
    room_access: {
        type: String,
        required: true,
    },
    room_minPers: {
        type: Number,
        required: true,
    },
    room_maxPers: {
        type: Number,
        required: true,
    },
    room_priceLow: {
        type: Number,
        required: true,
    },
    room_priceHigh: {
        type: Number,
        required: true,
    },
    room_size: {
        type: Number,
        required: true,
    },
    room_heating: {
        type: Boolean,
        required: true,
    },
    room_cooling: {
        type: Boolean,
        required: true,
    },
    room_cocktail: {
        type: Number,
        required: true,
    },
    room_banquet: {
        type: Number,
        required: true,
    },
    room_U: {
        type: Number,
        required: true,
    },
    room_seminary: {
        type: Number,
        required: true,
    },
    room_photo: {
        type: [String],
    }
});

export default mongoose.model("RoomsToRent", RoomsToRentSchema);