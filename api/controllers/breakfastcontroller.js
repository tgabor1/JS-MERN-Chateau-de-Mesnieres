import Breakfast from "../models/Breakfast.js";

//CREATE
export const createBreakfast = async (req, res, next) => {
    const newBreakfast = new Breakfast(req.body)

    try {
        const savedBreakfast = await newBreakfast.save()
        res.status(200).json(savedBreakfast)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateBreakfast = async (req, res, next) => {
    try {
        const updatedBreakfast = await Breakfast.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedBreakfast)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteBreakfast = async (req, res, next) => {
    try {
        await Breakfast.findByIdAndDelete(req.params.id)
        res.status(200).json("Le petit-déjeuner a été supprimée.")
    } catch (err) {
        next(err);
    }
}