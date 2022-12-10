import mongoose from "mongoose";

const PartnersSchema = new mongoose.Schema({
    partner_title: {
        type: String,
        required: true,
    },
    partner_url: {
        type: String,
        required: true,
    },
    partner_message: {
        type: String,
        required: true,
    },
    partner_logo: {
        type: [String],
    }
});

export default mongoose.model("Partners", PartnersSchema);