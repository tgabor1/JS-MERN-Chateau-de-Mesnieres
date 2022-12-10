import Dorms from "../models/Dorms.js";

//CREATE
export const createDorms = async (req, res, next) => {
    const newDorms = new Dorms(req.body)

    try {
        const savedDorms = await newDorms.save()
        res.status(200).json(savedDorms)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateDorms = async (req, res, next) => {
    try {
        const updatedDorms = await Dorms.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedDorms)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteDorms = async (req, res, next) => {
    try {
        await Dorms.findByIdAndDelete(req.params.id)
        res.status(200).json("Le dortoir a été supprimé.")
    } catch (err) {
        next(err);
    }
}