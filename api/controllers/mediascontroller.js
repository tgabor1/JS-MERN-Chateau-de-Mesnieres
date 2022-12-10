import Medias from "../models/Medias.js"

//CREATE
export const createMedias = async (req, res, next) => {
    const newMedias = new Medias(req.body)

    try {
        const savedMedias = await newMedias.save()
        res.status(200).json(savedMedias)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateMedias = async (req, res, next) => {
    try {
        const updatedMedias = await Medias.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedMedias)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteMedias = async (req, res, next) => {
    try {
        await Medias.findByIdAndDelete(req.params.id)
        res.status(200).json("L'article de presse a été supprimé.")
    } catch (err) {
        next(err);
    }
}