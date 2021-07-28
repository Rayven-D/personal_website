import * as functions from "firebase-functions";
import * as https from "https";
import * as cor from "cors";

const cors = cor({origin: true});

export const getRepos = functions.https.onRequest( (req, res)  => {

    cors( req, res, () => {
        var options = {
            host: 'api.github.com',
            path: '/users/Rayven-D/repos?sort=updated&direction=desc',
            method: 'GET',
            headers: {
                'user-agent': 'node.js',
                'Authorization': functions.config().spotify.repoaccesstoken,
            }
        }
        
        https.get(options, (resp) => {
            let data ='';
    
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
})