const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: true})) //it will help us access the data in the form as a "body" object. Bodyparse needs this to be explicit written.

app.listen(2000, function () {
    console.log('Servidor iniciado');
});

//respuesta del servidor 
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html'); //__dirname is a string with the current directory of this file
});

//posteamos y usamos el package body-parser para covertir el conteido del form
app.post('/', function(request, response) {
    var number1 = Number(request.body.num1);
    var number2 = Number(request.body.num2);
    var result = number1 + number2;

    console.log("La suma de los numeros es: ", result);

    response.send(`The sum is <b>${result}</b> <br />Thanks for calculating. <br />This is a post method action.`); //responde con esto en la pagina
});


app.get('/bmi', function (request, response) {
    response.sendFile(__dirname + '/bmi.html');
});


///posteo en el lugar donde quiero, en este caso es "/bmi"
app.post('/bmi', function (request, response) { 
    let mass = Number(request.body.mass);
    let height = Number(request.body.height);
    console.log(mass);
    console.log(height);

    const bmi = mass / Math.pow(height, 2);

    console.log(bmi);
    response.send(`The BMI is ${bmi}`);
});













