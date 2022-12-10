import mongoose from "mongoose";

const PricesVisitSchema = new mongoose.Schema({
    visit_priceAdult: {
        type: Number,
        required: true,
    },
    visit_priceGroup: {
        type: Number,
        required: true,
    },
    vist_priceGarden: {
        type: Number,
        required: true,
    }
});

export default mongoose.model("PricesVisit", PricesVisitSchema);