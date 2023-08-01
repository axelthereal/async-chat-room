const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

// Global variables
const port = 3030;

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


// Routing Handlers
app.use("/", require("./routes/homeRouter"));

// Listen to port
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});