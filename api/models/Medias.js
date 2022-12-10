import mongoose from "mongoose";

const MediasSchema = new mongoose.Schema({
    media_title: {
        type: String,
        required: true,
    },
    media_message: {
        type: String,
        required: true,
    },
    media_url: {
        type: String,
        required: true,
    },
    media_check: {
        type: String,
        required: true,
    },
    media_img1: {
        type: [String],
    },
    media_img2: {
        type: [String],
    }
});

export default mongoose.model("Medias", MediasSchema);