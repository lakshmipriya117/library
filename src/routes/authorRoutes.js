const express = require("express");
const authorsRouter = express.Router();
function router(nav){
    var authors =[
        {
            name : "K.R Meera",
            dob : "19 February 1970",
            ntn : "Indian",
            img : "KR-MEERA.jpg"
        },
        {
            name : "Vaikom Muhammed Basheer",
            dob : "21 January 1908",
            ntn : "Indian",
           img: "basheer.jpg"
        },
        {
            name : "Benyamin",
            dob : "1971",
            ntn : "Indian",
            img: "ben.jpg"
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("author",{
            nav,
            title:'Library',
            author: authors[id]
        });
    });
    return authorsRouter;
}

module.exports = router;