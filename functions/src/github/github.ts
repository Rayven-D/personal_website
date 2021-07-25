import * as functions from "firebase-functions";
import * as https from "https";

export const getRepos = functions.https.onRequest( (req, res)  => {

    var options = {
        host: 'api.github.com',
        path: '/users/Rayven-D/repos?sort=updated&direction=desc',
        method: 'GET',
        headers: {
            'user-agent': 'node.js',
            'Authorization': functions.config().spotify.repoaccesstoken,
        }
    }

    res.set('Access-Control-Allow-Origin', '*');

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