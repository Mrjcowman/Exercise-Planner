const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioExerciseSchema = new Schema({
    name: String,
    distance: Number,
    duration: Number
});

const CardioExercise = mongoose.model("CardioExercise", CardioExerciseSchema);

module.exports = CardioExercise;