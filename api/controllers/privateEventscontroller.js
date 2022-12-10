import PrivateEvents from "../models/PrivateEvents.js";

//CREATE
export const createPrivateEvents = async (req, res, next) => {
    const newPrivateEvents = new PrivateEvents(req.body)

    try {
        const savedPrivateEvents = await newPrivateEvents.save()
        res.status(200).json(savedPrivateEvents)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updatePrivateEvents = async (req, res, next) => {
    try {
        const updatedPrivateEvents = await PrivateEvents.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPrivateEvents)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deletePrivateEvents = async (req, res, next) => {
    try {
        await PrivateEvents.findByIdAndDelete(req.params.id)
        res.status(200).json("L'évènement privé a été supprimée.")
    } catch (err) {
        next(err);
    }
}