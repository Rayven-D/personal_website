import * as functions from "firebase-functions";
import { SpotifyWebApi } from "spotify-web-api-ts"

const spotifyAPI = new SpotifyWebApi({
    clientId = functions.config().spotify.clientid,
    clientSecret = functions.config().spotify.clientsecret,
});

