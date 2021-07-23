import * as functions from "firebase-functions";
import * as cors from "cors";
import * as express from "express";
import OpenWeatherMap from "openweathermap-ts";


const openweather = new OpenWeatherMap({
    apiKey: functions.config().weather.key,
    language: "en",
});

const expr = express();
expr.use(cors({origin: true}))

export const getTemp = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');

    openweather.getCurrentWeatherByCityName({
        cityName: "Lubbock",
    }).then( (weather) => {
        res.send(weather.main.temp);
    })
});