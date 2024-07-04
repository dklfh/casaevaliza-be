import express from "express";
import { 
    getTexthome, 
    getTexthomeById,
    saveTexthome,
    updateTexthome,
    deleteTexthome,
} from "../controllers/TexhomeController.js";

const router = express.Router();

router.get('/home', getTexthome);
router.get('/home/:id', getTexthomeById);
router.post('/home', saveTexthome);
router.patch('/home/:id', updateTexthome);
router.delete('/home/:id', deleteTexthome);

export default router;