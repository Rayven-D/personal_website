import * as functions from "firebase-functions";
import * as cor from "cors";
import * as http from "http";

const cors = cor({origin: true});

export const getISSLocation = functions.https.onRequest( (req, res) =>{

    cors( req, res, () => {
        var options = {
            host: "api.open-notify.org",
            path: "/iss-now.json",
            method: "GET",
            headers:{
                'user-agent': 'node.js'
            }
        }
        http.get(options, (resp) => {
            let data = '';
    
            resp.on('data', (chunck) => {
                data += chunck;
            })
    
            resp.on('end', () => {
                res.send(data);
            })
        }).on('error', (err) =>{
            console.log("Error: " + err);
        })
    })
});
