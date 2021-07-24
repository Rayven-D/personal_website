import * as functions from "firebase-functions";
import * as https from "https";

export const getRepos = functions.https.onRequest( (req, res)  => {

    var options = {
        host: 'api.github.com',
        path: '/users/Rayven-D/repos',
        method: 'GET',
        headers: {
            'user-agent': 'node.js'
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