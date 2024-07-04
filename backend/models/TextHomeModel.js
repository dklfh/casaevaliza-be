import mongoose from "mongoose";

const Texthome = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
});

export default mongoose.model('Texthome', Texthome);