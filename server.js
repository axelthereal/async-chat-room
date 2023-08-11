import express, {static as static_} from "express";
const app = express();
import bodyparser from "body-parser";
import session from "express-session";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Global variables
const port = 3030;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(cors()); 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(session({
       secret: "$node235Tvf23opml@sdf",
       resave: false,
       saveUninitialized: false, 
       cookie: {secure:false}
}));

// Routing Handlers 
//publicPath: process.env.NODE_ENV === 'production' ? '/' : ''
app.use("/", express.static(path.join(__dirname, "client/dist")));
app.use("/home", express.static(path.join(__dirname, "client/dist")));
app.use("/signin", express.static(path.join(__dirname, "client/dist")));
app.use("/chat", express.static(path.join(__dirname, "client/dist")));

// Listen to port
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});