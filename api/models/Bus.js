import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
    bus_urlRouen: {
        type: String,
        required: true,
    },
    bus_urlDieppe: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Bus", BusSchema);