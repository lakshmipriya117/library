const express = require("express");
const booksRouter = express.Router();
function router(nav){
    var books =[
        {
            title: 'Aarachar',
            author: 'K.R Meera',
            genre: 'Novel',
            img: 'aarachar.jpg'
        },
        {
            title: 'Pathummayude aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: 'pathumma.jpg'
        },
        {
            title: 'Aadujeevitham',
            author: 'Benyamin',
            genre: 'Novel',
            img: 'aadu.jpg'
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("book",{
            nav,
            title:'Library',
            book: books[id]
        });
    });
    return booksRouter;
}

module.exports = router;