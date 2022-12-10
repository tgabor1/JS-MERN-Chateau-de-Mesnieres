import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema({
    event_title: {
        type: String,
        required: true,
    },
    event_url: {
        type: String,
        required: true,
    },
    event_dateStart: {
        type: Date,
        required: true,
    },
    event_dateEnd: {
        type: Date,
        required: true,
    },
    event_message: {
        type: String,
        required: true,
    },
    event_check: {
        type: String,
        required: true,
    },
    event_tel: {
        type: String,
        required: true,
    },
    event_email: {
        type: String,
        required: true,
    },
    event_dateLastCall: {
        type: Date,
        required: true,
    },
    event_photo: {
        type: [String],
    }
});

export default mongoose.model("Events", EventsSchema);