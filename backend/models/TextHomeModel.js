import mongoose from "mongoose";

const Texthome = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
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