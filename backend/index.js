import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";
import BookingRoute from "./routes/BookingRoutes.js";
import PegawaiRoute from "./routes/PegawaiRoute.js"
import TexthomeRoute from "./routes/TexthomeRoute.js"

const app = express();
mongoose.connect('mongodb://localhost:27017/casaevaliza_db');

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(BookingRoute);
app.use(PegawaiRoute)
app.use(TexthomeRoute)

app.listen(5000, ()=> console.log('Server up and running...'));