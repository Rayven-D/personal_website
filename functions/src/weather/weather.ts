import * as functions from "firebase-functions";
import OpenWeatherMap from "openweathermap-ts";

const openweather = new OpenWeatherMap({
    apiKey: functions.config().weather.key,
    language: "en",
});

export const getTemp = functions.https.onCall(() => {
    openweather.getCurrentWeatherByCityName({
        cityName: "Lubbock",
    }).then( (weather) => {
            return weather.main.temp;
        });
});