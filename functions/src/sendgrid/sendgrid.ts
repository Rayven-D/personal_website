import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
import * as cor from "cors";

sgMail.setApiKey(functions.config().sendgrid.key);

const cors = cor({origin:true});

export const sendMail = functions.https.onRequest( (req, res) => {
    cors(req, res, () => {
        const message = {
            to: "rjderay@gmail.com",
            from: "rjderaywebsite@gmail.com",
            subject: req.body.subject,
            text: req.body.content
        }
        sgMail.send(message)
            .then(
                (data) =>{
                    res.sendStatus(200)
                }
            ).catch( (error) =>{
                res.sendStatus(500)
            })
        
    })
})

