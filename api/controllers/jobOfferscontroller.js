import JobOffers from "../models/JobOffers.js";

//CREATE
export const createJobOffers = async (req, res, next) => {
    const newJobOffers = new JobOffers(req.body)

    try {
        const savedJobOffers = await newJobOffers.save()
        res.status(200).json(savedJobOffers)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateJobOffers = async (req, res, next) => {
    try {
        const updatedJobOffers = await JobOffers.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedJobOffers)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteJobOffers = async (req, res, next) => {
    try {
        await JobOffers.findByIdAndDelete(req.params.id)
        res.status(200).json("L'offre d'emploi a été supprimé.")
    } catch (err) {
        next(err);
    }
}