import mongoose from "mongoose";

const JobOffersSchema = new mongoose.Schema({
    offer_title: {
        type: String,
        required: true,
    },
    offer_check: {
        type: String,
        required: true,
    },
    offer_start: {
        type: Date,
        required: true,
    },
    offer_end: {
        type: Date,
        required: true,
    },
    offer_studies: {
        type: String,
        required: true,
    },
    offer_experience: {
        type: String,
        required: true,
    },
    offer_language: {
        type: String,
        required: true,
    },
    offer_hours: {
        type: Date,
        required: true,
    },
    offer_paycheck: {
        type: String,
        required: true,
    },
    offer_message: {
        type: String,
        required: true,
    }
});

export default mongoose.model("JobOffers", JobOffersSchema);