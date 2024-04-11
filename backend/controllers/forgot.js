const nodemailer = require("nodemailer");
const User = require ('../models/usermodels')
 
const forgot = async (subject, message, send_to, sent_from, reply_to) => {
    const user = await User.updated(send_to)
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
    to: send_to,
    replyTo: reply_to,
    subject: "Recuperation de mot de passe ",
    html: + message + " votre nouveau mot de passe est " +  user,
  };

  
  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
     console.log(err);
    } else {
     console.log(info);
    }
  });
};

module.exports = forgot;
