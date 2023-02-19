const express = require("express");
const bodyParser = require("body-parser")
const ejs = require ("ejs")

const mongoose = require ("mongoose")

const app = express()

app.get("/product", (req, res) => {
        res.send("success");
});

app.get("/product/:id", (req, res) => {
        res.send("Products")
})

app.listen(3000, ()=>{
        console.log("Server is running at port 3000");
     });