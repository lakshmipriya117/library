const express = require("express");
const app = express();
const nav = [
{
     link:'/index',name:'Home'
},
{
    link:'/books', name:'Books'
},
{
    link:'/authors',name:'Author'
},
{
    link:'/bookadd',name:'Add Book'
}
];
const nav1 = [{
    link:'/signin',name:'Login'
},
{
    link:'/signup',name:'SignUp'
}];
const booksRouter = require("./src/routes/booksRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const inRouter = require("./src/routes/inRoutes")(nav1);
const indexRouter = require("./src/routes/indexRoutes")(nav);
const upRouter = require("./src/routes/upRoutes")(nav1);
const addRouter = require("./src/routes/addRoutes")(nav);
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',inRouter);
app.use('/index',indexRouter);
app.use('/signup',upRouter);
app.use('/bookadd',addRouter);
app.get('/',function(req,res){
    res.render("signin",{
        nav1,
        title:'Library'
    });
});


app.listen(5000);