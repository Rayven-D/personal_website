import * as functions from "firebase-functions";
import OpenWeatherMap from "openweathermap-ts";
import * as cors from "cors";

const cor = cors({origin: true})

const openweather = new OpenWeatherMap({
    apiKey: functions.config().weather.key,
    language: "en",
});

export const getTemp = functions.https.onRequest((req, res) => {

    cor( req, res, () =>{

        let lat:number = req.body.lat;
        let long:number = req.body.long;
    
        openweather.getCurrentWeatherByGeoCoordinates(lat, long).then( (weather) => {
            res.send(weather);
        })
    })
});