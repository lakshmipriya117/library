const express = require("express");
const inRouter = express.Router();
function router(nav1){
   
    inRouter.get('/',function(req,res){
        res.render("signin",{
            nav1,
            title:'Library',
        });
    });
    inRouter.get('/index',function(req,res){
        res.render("index",{
            nav1,
            title:'Library',
        });
    });  
    inRouter.post('/index',function(req,res){
        res.render("index",{
            nav1,
            title:'Library',
        });
    });

    return inRouter;
}

module.exports = router;