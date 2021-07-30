import * as functions from "firebase-functions";
import * as cor from "cors";

const cors = cor({origin: true});

export const getISSLocation = functions.https.onRequest( (req, res) =>{

    cors( req, res, () => {
        const resp = fetch("http://api.open-notify.org/iss-now.json");
        resp
            .then( (resp) =>{
                res.send(resp);
            })
            .catch( () => {
                console.log("Failed")
            })
    })
});
