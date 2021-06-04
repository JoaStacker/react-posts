const express = require('express')
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const ejs = require('ejs');
const app = express()

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


app.get('/user/:userName', function(req, res) {
    Article.findOne({name: req.params.userName}, function(err, oneArticle){
        if(!err) console.log(oneArticle.name);
        const stringedArticle = JSON.stringify(oneArticle);
        res.send(stringedArticle);
    });
});

app.listen(5000, function () {
  console.log('Server started successfully!')
})
