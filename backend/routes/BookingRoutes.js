import express from "express";
import { 
    getBooking, 
    getBookingById,
    saveBooking,
    updateBooking,
    deleteBooking,
} from "../controllers/BookingController.js";

const router = express.Router();

router.get('/pesan', getBooking);
router.get('/pesan/:id', getBookingById);
router.post('/pesan', saveBooking);
router.patch('/pesan/:id', updateBooking);
router.delete('/pesan/:id', deleteBooking);

export default router;