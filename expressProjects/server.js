const express = require('express');
const fs = require('fs');

const app = express(); //we are creating the app variable where we can access all methods in the express module (framework)


app.listen(3000, function () {
    console.log("the server has started")
});


//si el usuario pide la ruta raiz "localhost:3000"
app.get("/", function (request, response) { //request a donde pedimos los datos, response es lo que el usuario verá
    response.send("<h2>Hola gracias por vistar este sitio</h2>")
});

//contenido a enviar por el servidor cuando ingrese a /about
app.get('/about', function (request, response) {
    response.send("Contacto: joessar99@gmail.com")
});

app.get('/joaquin', function (request, response) {
    response.send('<h2>Mi nombre es joaquin y me encanta la programacion y la ingenieria de sistemas.</h2>')
});









