import TimeTable from "../models/TimeTable.js";

//CREATE
export const createTimeTable = async (req, res, next) => {
    const newTimeTable = new TimeTable(req.body)

    try {
        const savedTimeTable = await newTimeTable.save()
        res.status(200).json(savedTimeTable)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateTimeTable = async (req, res, next) => {
    try {
        const updatedTimeTable = await TimeTable.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedTimeTable)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteTimeTable = async (req, res, next) => {
    try {
        await TimeTable.findByIdAndDelete(req.params.id)
        res.status(200).json("Le prix de la visite a été supprimé.")
    } catch (err) {
        next(err);
    }
}