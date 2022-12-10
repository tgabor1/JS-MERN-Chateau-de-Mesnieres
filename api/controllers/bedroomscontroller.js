import Bedrooms from "../models/Bedrooms.js";

//CREATE
export const createBedrooms = async (req, res, next) => {
    const newBedrooms = new Bedrooms(req.body)

    try {
        const savedBedrooms = await newBedrooms.save()
        res.status(200).json(savedBedrooms)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateBedrooms = async (req, res, next) => {
    try {
        const updatedBedrooms = await Bedrooms.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedBedrooms)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteBedrooms = async (req, res, next) => {
    try {
        await Bedrooms.findByIdAndDelete(req.params.id)
        res.status(200).json("La chambre a été supprimée.")
    } catch (err) {
        next(err);
    }
}