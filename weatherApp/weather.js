const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

// const city = 'london';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function () {
    console.log("This server has started ar port 3000");
});

// app.get('/', function(request, response) {
//     https.get(url , function (HTTPSres){
//         HTTPSres.on('data', function(data){
//             const weatherInfo = JSON.parse(data);
//             const main = weatherInfo.weather[0].main;
//             const temp = weatherInfo.main.temp;
//             const iconName = weatherInfo.weather[0].icon;
//             const iconURL = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
//             response.write(`<p><img src="${iconURL}"></p>`);
//             response.write(`<p>The weather in London: <b>${temp}</b></p>`);
//             response.write(`<p>The weather in London: <b>${main}</b></p>`);
//             response.send();
//         });
//     });
// });


app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html'); 
});

app.post('/', function (req, res) {
    console.log("Thanks for searching the weather!");
    const apikey = 'f7383d6d274de894f79cc4c54581bd15';
    const city = req.body.cityname;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    https.get(url, function(response) {
        response.on('data', function (data){
            const weatherInfo = JSON.parse(data);
            const title = weatherInfo.weather[0].main;
            const temp = weatherInfo.main.temp;
            const iconName = weatherInfo.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
            res.write(`<p><img src="${iconURL}"></p>`);
            res.write(`<p>Temperature: <b>${Math.floor(temp)} °C</b></p>`);
            res.write(`<p>The weather in London: <b>${title}</b></p>`);
            res.send();
        });
    });
});














