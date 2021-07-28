import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
import * as cor from "cors";

sgMail.setApiKey(functions.config().sendgrid.key);

const cors = cor({origin:true});

export const sendMail = functions.https.onRequest( (req, res) => {
    cors(req, res, () => {
        const message = {
            to: "rjderay@gmail.com",
            from: "test@example.com",
            subject: "Test",
            text: "Testing sending emails"
        }
        sgMail.send(message)
            .then(
                () =>{
                    res.sendStatus(200);
                }
            )
            .catch(
                () =>{
                    res.sendStatus(500)
                }
            )
        
    })
})

