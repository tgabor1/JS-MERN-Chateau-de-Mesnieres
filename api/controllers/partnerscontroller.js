import Partners from "../models/Partners.js";

//CREATE
export const createPartners = async (req, res, next) => {
    const newPartners = new Partners(req.body)

    try {
        const savedPartners = await newPartners.save()
        res.status(200).json(savedPartners)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updatePartners = async (req, res, next) => {
    try {
        const updatedPartners = await Partners.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPartners)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deletePartners = async (req, res, next) => {
    try {
        await Partners.findByIdAndDelete(req.params.id)
        res.status(200).json("Le partenaire a été supprimé.")
    } catch (err) {
        next(err);
    }
}