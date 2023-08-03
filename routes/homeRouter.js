import { Router } from "express";
const router = Router();

// View data variable
var viewcontext = {
    "view": "",
    "msgobj" : { "type":"", "msg":"" } 
}  

// View Routes
router.get("/home", (req, res)=>{
    //set dynamic view title
    viewcontext.view = "Home";

    // add view context (data variable)
    res.locals.data = viewcontext;

    // render page
    res.render("pages/home");
});

// force home to be viewed at "/home"
router.get("/", (req, res)=>{ 
    // redirect to home
    res.redirect("/home");
});



export default router;