import express, {static as static_} from "express";
const app = express();
import bodyparser from "body-parser";
import session from "express-session";
import homeRouter from "./routes/homeRouter.js";

// Global variables
const port = 3030;

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use("/assets", static_("static"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(session({
       secret: "$node235Tvf23opml@sdf",
       resave: false,
       saveUninitialized: false,
       cookie: {secure:false}
}));

// Routing Handlers
app.use("/", homeRouter);

// Listen to port
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});