const express = require('express');
const helmet = require('helmet'); //Helmet helps you secure your Express apps by setting various HTTP headers
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const Joi = require('joi');
const notifier = require('node-notifier');

const sslRedirect = require('heroku-ssl-redirect');

app.use(sslRedirect()); // Redirect http request to https
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

// We don't need this if statement to perform the sending emails
if (process.env.NODE_ENV === 'production') {

    // Express will serve up production assets like out main.js file, or main.css file
    app.use(express.static('johnny-resume-client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'johnny-resume-client', 'build', 'index.html'));
    });

    app.post('/api/form', (req, res) => {
            const schema = {
                name: Joi.string().required(),
                subject: Joi.string().required(),
                email: Joi.string().email().required(),
                message: Joi.string().min(5).max(1000).required()
            };

            const result = Joi.validate(req.body, schema);

            if (result.error) {
                return res.status(400).send(result.error.details[0].message);
            }


            nodemailer.createTestAccount((err, account) => {
            const htmlEmail = `
                <h3>Contact Detail</h3>
                <h2>${req.body.subject}</h2>
                <ul>
                    <li>Name: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
            `

            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'chch6597@colorado.edu', // This should be the email addr with the enable API

                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                    accessToken: process.env.GOOGLE_ACCESS_TOKEN,
                },
            });

            let mailOptions = {
                to: 'chch6597@colorado.edu',
                subject: req.body.subject,
                replyTo: req.body.email,
                text: req.body.message,
                html: htmlEmail
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log('err: ', err)
                }
                else {
                    console.log('Message sent: %s', info.message)
                    console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
                }
            });

            notifier.notify('Thank you for sending email. I will get back to you ASAP!');
        });
    });
}

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
});