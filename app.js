const express = require("express");
const bodyParser = require("body-parser")
const ejs = require ("ejs")

const mongoose = require ("mongoose")
mongoose.set('strictQuery', false);

const app = express()
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Satnan:12345678my@cluster0.hwkkxo2.mongodb.net/UserDB?retryWrites=true&w=majority");

const userSchema = {
    username:String,
    email: String,
    password: String,
    date : String,
    tel: String,
    weight: String,
    height: String,
    radio_gender: String
}

const User = new mongoose.model("User", userSchema)

app.get("/",(req,res)=>{
    res.render("home_to_login");
});

app.get("/home_to_login",(req,res)=>{
    res.render("home_to_login");
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

app.post("/login", (req, res)=>{

    const email =  req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, foundUser) => {
        if (err) console.log(err)
        else {
            if (foundUser) {
                if (foundUser.password === password) res.render("home");
                else res.redirect("login")
            }
        }
    });
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.post("/signup", (req, res) => {
    const newUser = new User ({
        email: req.body.email,
        password: req.body.password,
        username:req.body.username,
        date: req.body.date,
        tel: req.body.tel,
        weight: req.body.weight,
        height: req.body.height,
        radio_gender: req.body.radio_gender

    });

    newUser.save((err) => {
        if (err) console.log (err)
        else res.render("home")
    })
})

app.get("/logout",(req,res)=>{
    res.redirect("/")
});


app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
 })

