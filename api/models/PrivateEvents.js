import mongoose from "mongoose";

const PrivateEventsSchema = new mongoose.Schema({
    privateEvent_check: {
        type: String,
        required: true,
    },
    privateEvent_date: {
        type: Date,
        required: true,
    }
});

export default mongoose.model("PrivateEvents", PrivateEventsSchema);