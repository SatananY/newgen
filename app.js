const express = require("express");
const bodyParser = require("body-parser")
const ejs = require ("ejs")

const mongoose = require ("mongoose")

const app = express()
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/home",(req,res)=>{
    res.render("home");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.get("/more",(req,res)=>{
    res.render("more");
});

app.get("/Eat",(req,res)=>{
    res.render("Eat");
});

app.get("/Personalized",(req,res)=>{
    res.render("Personalized");
});

app.get("/special",(req,res)=>{
    res.render("special");
});

app.get("/Spacialadvice",(req,res)=>{
    res.render("Spacialadvice");
});

app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
 })
 //tan 12345683dasdassad

 
