const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("/.models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercisedb", {useNewUrlParser: true});

// Seed here?

// ROUTES ==================================
app.get("/", (req, res)=>{
    // TODO: render index
});

// API =====================================
app.post("/api/exercises", (req, res)=>{
    // TODO: implement create
});

app.get("/api/exercises/:id", (req, res)=>{
    // TODO: implement read
});

app.post("/api/exercises/:id", (req, res)=>{
    // TODO: implement update
});

app.delete("/api/exercises/:id", (req, res)=>{
    // TODO: implement delete
});

// OPEN SERVER ================================
app.listen(PORT, ()=>{
    console.log(`App started on port ${PORT}`);
});