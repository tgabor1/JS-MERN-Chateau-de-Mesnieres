import PricesVisit from "../models/PricesVisit.js";

//CREATE
export const createPricesVisit = async (req, res, next) => {
    const newPricesVisit = new PricesVisit(req.body)

    try {
        const savedPricesVisit = await newPricesVisit.save()
        res.status(200).json(savedPricesVisit)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updatePricesVisit = async (req, res, next) => {
    try {
        const updatedPricesVisit = await PricesVisit.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPricesVisit)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deletePricesVisit = async (req, res, next) => {
    try {
        await PricesVisit.findByIdAndDelete(req.params.id)
        res.status(200).json("Le prix de la visite a été supprimé.")
    } catch (err) {
        next(err);
    }
}