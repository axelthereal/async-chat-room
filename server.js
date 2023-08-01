const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

// Global variables
let port = 3030;

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use("/assets", express.static("static"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
       secret: "$node235Tvf23opml@sdf",
       resave: false,
       saveUninitialized: false,
       cookie: {secure:false}
}));



// Routing
app.get("/", (req, res)=>{
    res.render("pages/home");
});



// Listen to port
app.listen(port, (err)=>{
    console.log(`Server running on port: ${port}`);
});