const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StrengthExerciseSchema = new Schema({
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
});

const StrengthExercise = mongoose.model("StrengthExercise", StrengthExerciseSchema);

module.exports = StrengthExercise;