const express = require("express");
const upRouter = express.Router();
function router(nav1){
   
    upRouter.get('/',function(req,res){
        res.render("signup",{
            nav1,
            title:'Library',
        });
    });
    

    return upRouter;
}

module.exports = router;