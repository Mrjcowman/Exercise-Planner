const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercisedb", {useNewUrlParser: true});

// Seed here?


// // ROUTES ==================================
// app.get("/", (req, res)=>{
//     // TODO: render index
// });

// API =====================================
app.post("/api/exercises", (req, res)=>{
    // TODO: implement create
    db.CardioExercise.create(req.body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err=>{
            res.json(err);
        })
});

app.get("/api/exercises/:id", (req, res)=>{
    // TODO: implement read
    db.CardioExercise.findById(req.params.id)
        .then(dbExercise=>{
            res.json(dbExercise);
        }).catch(err=>{
            res.json(err);
        })
});

app.post("/api/exercises/:id", (req, res)=>{
    // TODO: implement update
    db.CardioExercise.findByIdAndUpdate(req.params.id, req.body)
        .then(dbExercise=>{
            res.json(dbExercise);
        }).catch(err=>{
            res.json(err);
        })
});

app.delete("/api/exercises/:id", (req, res)=>{
    // TODO: implement delete
    db.CardioExercise.findByIdAndDelete(req.params.id)
        .then(dbExercise=>{
            res.json(dbExercise);
        }).catch(err=>{
            res.json(err);
        })
});

// Catch all other routes
app.get("*", (req, res)=>{
    res.status(404).send("Sorry, we couldn't find what you're looking for!");
})

// OPEN SERVER ================================
app.listen(PORT, ()=>{
    console.log(`App started on port ${PORT}`);
});