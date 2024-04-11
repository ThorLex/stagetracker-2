const nodemailer = require("nodemailer");




  
const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
   

    host: "smtp.gmail.com",
    port: "587",
    auth: {
      user: "stagetrackers@gmail.com",
      pass: 'skaf stkg xhkt gnvd',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  
  const options = {
    from: sent_from,
    to: "beyasbekono@gmail.com",
    replyTo: reply_to,
    subject: subject,
    html: message 
  };

  
  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
console.log(err)
    } else {
    console.log(info);
    }
  });
};

module.exports = sendEmail;
