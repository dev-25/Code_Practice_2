const cron = require("node-cron");
const express = require("express");
const nodeMailer = require('nodemailer');

const app = express();

cron.schedule('1 * * * *', () => {
    console.log('Executing cron job');
});

app.listen(8000);