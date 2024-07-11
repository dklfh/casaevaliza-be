import mongoose from "mongoose";

const Texthome = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
});

export default mongoose.model('Texthome', Texthome);