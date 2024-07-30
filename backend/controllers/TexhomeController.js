import path from "path";
import fs from "fs";
import { Texthome, ImageModel } from "../models/TextHomeModel.js";

// Texthome Controllers
export const getTexthome = async (req, res) => {
    try {
        const texts = await Texthome.find();
        res.json(texts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTexthomeById = async (req, res) => {
    try {
        const text = await Texthome.findById(req.params.id);
        res.json(text);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const saveTexthome = async (req, res) => {
    const text = new Texthome(req.body);
    try {
        const insertedText = await text.save();
        res.status(201).json(insertedText);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateTexthome = async (req, res) => {
    try {
        const updatedText = await Texthome.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json(updatedText);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteTexthome = async (req, res) => {
    try {
        const deletedText = await Texthome.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedText);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Image Controllers
export const uploadSingleImage = async (req, res) => {
    try {
        const { path, filename } = req.file;
        const image = new ImageModel({ path, filename });
        await image.save();
        res.send({ msg: "kelazz bang gambar mu ke upload" });
    } catch (error) {
        res.send({ error: "gak bisa ke upload cokk" });
    }
};

export const getAllImages = async (req, res) => {
    try {
        const images = await ImageModel.find();
        res.send(images);
    } catch (error) {
        res.send({ error: "Gagal mengambil gambar" });
    }
};

export const getSingleImage = async (req, res) => {
    const { id } = req.params;
    try {
        const image = await ImageModel.findById(id);
        if (!image) res.send({ msg: "gambar mu gak ad cokk" });

        const imagePath = path.join(__dirname, "../uploads", image.filename);
        res.sendFile(imagePath);
    } catch (error) {
        res.send({ error: "gak bisa mengambil gambar cokk" });
    }
};

export const deleteImage = async (req, res) => {
    const { filename } = req.params;
    try {
        const image = await ImageModel.findOneAndDelete({ filename });
        if (!image) return res.status(404).json({ message: "Image not found" });

        const filePath = path.resolve(image.path);
        fs.unlink(filePath, (err) => {
            if (err) return res.status(500).json({ message: "Failed to delete file", error: err });
            res.status(200).json({ message: "File deleted successfully" });
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete image", error });
    }
};

export const saveImages = async (req, res) => {
    // Implement your logic to save images here if necessary
    res.status(200).json({ msg: 'Images saved successfully' });
};