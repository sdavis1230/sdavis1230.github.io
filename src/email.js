//
//const nodemailer = require("nodemailer");
////var express = require('express')
////var app = express()
//export function sendEmail() {} {
//    // node mailer code
//// async..await is not allowed in global scope, must use a wrapper
//async function main(){
//
//  // create reusable transporter object using the default SMTP transport
//  let transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//      user: '',
//      pass: ''
//    }
//  });
//
//  // setup email data with unicode symbols
//  let mailOptions = {
//    from: 'GeTABoard', // sender address
//    to: "", // list of receivers
//    subject: "Results of your Quiz", // Subject line
//    text: "", // plain text body
//    html: "<b></b>" // html body
//  };
//
//  // send mail with defined transport object
//  let info = await transporter.sendMail(mailOptions)
//
//  console.log("Message sent: %s", info.messageId);
//  // Preview only available when sending through an Ethereal account
//  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//
//  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//}
//
//main().catch(console.error);
//}