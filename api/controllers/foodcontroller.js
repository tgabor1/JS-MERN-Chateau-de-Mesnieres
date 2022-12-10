import Food from "../models/Food.js";

//CREATE
export const createFood = async (req, res, next) => {
    const newFood = new Food(req.body)

    try {
        const savedFood = await newFood.save()
        res.status(200).json(savedFood)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateFood = async (req, res, next) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedFood)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteFood = async (req, res, next) => {
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.status(200).json("Le plat a été supprimé.")
    } catch (err) {
        next(err);
    }
}