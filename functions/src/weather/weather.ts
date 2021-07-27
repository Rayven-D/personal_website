import * as functions from "firebase-functions";
import OpenWeatherMap from "openweathermap-ts";


const openweather = new OpenWeatherMap({
    apiKey: functions.config().weather.key,
    language: "en",
});

export const getTemp = functions.https.onRequest((req, res) => {
    let lat:number = req.body.lat;
    let long:number = req.body.long;

    res.set('Access-Control-Allow-Origin', '*');

    openweather.getCurrentWeatherByGeoCoordinates(lat, long).then( (weather) => {
        res.send(weather);
    })
});