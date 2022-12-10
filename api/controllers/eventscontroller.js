import Events from "../models/Events.js";

//CREATE
export const createEvents = async (req, res, next) => {
    const newEvents = new Events(req.body)

    try {
        const savedEvents = await newEvents.save()
        res.status(200).json(savedEvents)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateEvents = async (req, res, next) => {
    try {
        const updatedEvents = await Events.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedEvents)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteEvents = async (req, res, next) => {
    try {
        await Events.findByIdAndDelete(req.params.id)
        res.status(200).json("L'article a été supprimé.")
    } catch (err) {
        next(err);
    }
}