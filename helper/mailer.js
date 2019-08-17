const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oyekunlemac@gmail.com',
    pass: 'oyekunle1990',
  },
});

const mailOptions = {
  from: 'admin@where-to-code.com',
  to: 'oyekunlemac@yahoo.com',
  subject: 'Hope it works',
  html: '<strong>Yipeee!!!!</strong>',
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log(err);
  else console.log(info);
});
