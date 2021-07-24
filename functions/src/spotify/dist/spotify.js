"use strict";
exports.__esModule = true;
var functions = require("firebase-functions");
var spotify_web_api_ts_1 = require("spotify-web-api-ts");
var spotifyAPI = new spotify_web_api_ts_1.SpotifyWebApi({
    clientId: functions.config().spotify.clientid,
    clientSecret: functions.config().spotify.clientsecret
});
