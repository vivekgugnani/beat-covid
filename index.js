const express = require('express');
const request = require('request');
const sgMail = require('@sendgrid/mail')
const app = express();

const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=136135&date=20-05-2021";
const sendgridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridAPIKey)
setInterval(() => {
    request({url , json:true}, (error, {body}) => {
        if(error) {
            return console.log("i got some error")
        }
        if(body.sessions.length && body.sessions[0].min_age_limit == 18) {
            sgMail.send({
                to: 'vivek.gugnani04@gmail.com',
                from: 'vivek0094.cse19@chitkara.edu.in',
                subject: 'AA gya injection',
                text:   'jldi se book  kro'
            }).then(() => {
                console.log('sent')
            }).catch((e) => {
                console.log(e)
            })
            console.log(body.sessions)
        }
    })
},5000)

app.listen(process.env.PORT)