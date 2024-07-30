import mongoose from "mongoose";

const texthomeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
});

const Texthome = mongoose.model('Texthome', texthomeSchema);

const imageSchema = mongoose.Schema({
    path: { 
        type: String, 
        required: true 
    },
    filename: { 
        type: String, 
        required: true 
    },
});

const ImageModel = mongoose.model("images", imageSchema);

export { Texthome, ImageModel };
