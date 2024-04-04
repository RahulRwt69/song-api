
const express = require("express");
const mongoose = require("mongoose");
const router = new express.Router

/// Defining  schemas ////


/// Defining Song Schema ///
const songSchema = new mongoose.Schema({

    title: { type: String, required: true },
    songLink: { type: String, required: true },
    imageUrl: { type: String, required: true },
    artist: { type: String, required: true },
    genre:{type: String, required:true}
});

/// Create Mongoose Models /// 

const CSong = new mongoose.model('SongApi', songSchema);
module.exports = CSong

///  Route for user registration ///









