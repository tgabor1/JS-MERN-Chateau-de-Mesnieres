import RoomsToRent from "../models/RoomsToRent.js";

//CREATE
export const createRoomsToRent = async (req, res, next) => {
    const newRoomsToRent = new RoomsToRent(req.body)

    try {
        const savedRoomsToRent = await newRoomsToRent.save()
        res.status(200).json(savedRoomsToRent)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateRoomsToRent = async (req, res, next) => {
    try {
        const updatedRoomsToRent = await RoomsToRent.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedRoomsToRent)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteRoomsToRent = async (req, res, next) => {
    try {
        await RoomsToRent.findByIdAndDelete(req.params.id)
        res.status(200).json("La salle à louer a été supprimée.")
    } catch (err) {
        next(err);
    }
}