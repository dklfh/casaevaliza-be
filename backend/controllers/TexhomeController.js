import Texthome from "../models/TextHomeModel.js";

export const getTexthome = async (req, res) => {
    try {
        const texts = await Texthome.find();
        res.json(texts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTexthomeById = async (req, res) => {
    try {
        const text = await Texthome.findById(req.params.id);
        res.json(text);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveTexthome = async (req, res) => {
    const text = new Texthome(req.body);
    try {
        const insertedtext = await text.save();
        res.status(201).json(insertedtext);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTexthome = async (req, res) => {
    try {
        const updatedtext = await Texthome.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedtext);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTexthome = async (req, res) => {
    try {
        const deletedtext = await Texthome.deleteOne({_id:req.params.id});
        res.status(200).json(deletedtext);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}