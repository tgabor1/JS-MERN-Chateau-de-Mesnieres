import mongoose from "mongoose";

const TimeTableSchema = new mongoose.Schema({
    time_monthStart: {
        type: Date,
        required: true,
    },
    time_monthEnd: {
        type: Date,
        required: true,
    },
    time_hourStart: {
        type: Date,
        required: true,
    },
    time_hourEnd: {
        type: Date,
        required: true,
    }
});

export default mongoose.model("TimeTable", TimeTableSchema);