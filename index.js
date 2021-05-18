const express = require('express');
const request = require('request');
const sgMail = require('@sendgrid/mail')
const app = express();

const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110037&date=20-05-2021";
const sendgridAPIKey = process.env.SENDGRID_API_KEY;
const port = process.env.PORT || 3000;
sgMail.setApiKey(sendgridAPIKey)

app.use(express.json)
setInterval(() => {
    request({url , json:true}, (error, {body}) => {
        if(error) {
            return console.log("i got some error")
        }
        // if(!body.sessions) {
        //     return console.log('nothing found')
        // }
        console.log(body)
        // if(body.sessions.length > 0 && body.sessions[0].min_age_limit == 18) {
        //     sgMail.send({
        //         to: 'vivek.gugnani04@gmail.com',
        //         from: 'vivek0094.cse19@chitkara.edu.in',
        //         subject: 'AA gya injection',
        //         text:   'jldi se book  kro'
        //     }).then(() => {
        //         console.log('sent')
        //     }).catch((e) => {
        //         console.log(e)
        //     })
        //     console.log(body.sessions)
        // }
    })
},5000)

app.get('/', (req, res) => {
    res.render({
        hi: "everything fine!"
    })
})

app.listen(port, () => {
    console.log('server is up on port '+port)
})