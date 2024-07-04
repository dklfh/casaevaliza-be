import mongoose from "mongoose";

const Pegawai = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    jabatan:{
        type: String,
        required: true
    },
    quete:{
        type: String,
        required: true
    },
});

export default mongoose.model('Pegawai', Pegawai);