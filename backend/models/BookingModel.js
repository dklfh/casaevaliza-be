import mongoose from "mongoose";

const Booking = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    asalnegara:{
        type: String,
        required: true
    },
    tipekamar:{
        type: String,
        required: true
    }
});

export default mongoose.model('Booking', Booking);