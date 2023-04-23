// const mongoose = require('mongoose');

const { Schema, model } = require("mongoose");

// const Schema = mongoose.Schema;

const pdfSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }
}, {timestamps: true});

 const pdfModel = model('File', pdfSchema);

 module.exports =  {
    pdfModel
 }