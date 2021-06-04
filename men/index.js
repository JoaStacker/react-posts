const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const ejs = require('ejs');
const app = express();


app.use(bodyparser.urlencoded());
// app.use(express.static("public"));
app.set("view engine", "ejs"); //allows write html code


const schema = { //objeto que muestra la estructura del modelo
    name:String,
    age:Number
}


mongoose.connect("mongodb://localhost:27017/posts", {  //conectamos con MongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const Article = mongoose.model('users', schema); //este es un modelo

//get all users and show them when the browser loads
app.get('/user', function(req, res) {
    Article.find(function(err, articles){
        if(articles){
            console.log(articles);
            const data = JSON.stringify(articles);
            res.send(data);
        }else{
            console.log(err)
            res.send("there are no articles to fetch right now")
        }
    });
});

//add one user
app.post('/user', function (req, res) {
    console.log("Respuesta del request: " + JSON.stringify(req.body));
    const someName = Article({
        name: String(req.body.name),
        age: String(req.body.age)
    });
    console.log("Se crea un nuevo articulo: " + someName);
    someName.save();
    res.send('Added successfully!');
    // console.log(req.body.name);
    // console.log(req.body.age);
})



//delete all users
app.delete('/user', function(req, res){
    Article.deleteMany( function(err){
        if(!err) console.log("All the articles have been deleted");
    })
    res.send("All the articles have been deleted");
})

//get one
app.get('/user/:userName', function(req, res) {
    Article.findOne({name: req.params.userName}, function(err, oneArticle){
        if(!err) console.log(oneArticle.name);
        const stringedArticle = JSON.stringify(oneArticle);
        res.send(stringedArticle);
    });
});


//delete one
app.delete('/user/:userName', function (req, res){
    Article.deleteOne({name: req.params.userName}, function(err){
        if(!err) {console.log(`User ${req.params.userName} deleted successfully`);
        res.send(`User ${req.params.userName} deleted successfully`);}else{
            res.send(err);
        }
    });
})


app.listen(3000, function () {
    console.log('server started successfully');
});







