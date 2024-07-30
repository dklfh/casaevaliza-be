import express from "express";
import multer from "multer";
import {
    uploadSingleImage,
    getAllImages,
    getSingleImage,
    deleteImage,
    saveImages,
    getTexthome,
    getTexthomeById,
    saveTexthome,
    updateTexthome,
    deleteTexthome,
} from "../controllers/TexhomeController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

// Image Routes
router.post("/single", upload.single("image"), uploadSingleImage);
router.get("/images", getAllImages);
router.get("/single/:id", getSingleImage);
router.delete("/images/:filename", deleteImage);
router.post('/save-images', saveImages);

// Texthome routes
router.get('/home', getTexthome);
router.get('/home/:id', getTexthomeById);
router.post('/home', saveTexthome);
router.patch('/home/:id', updateTexthome);
router.delete('/home/:id', deleteTexthome);

export default router;