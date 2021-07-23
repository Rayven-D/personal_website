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
   expr(req, res, () => {
        res.send()
   })
});