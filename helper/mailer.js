const nodemailer = require('nodemailer');

// turn on less secure app on the google settings before running this block
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oyekunlemac@gmail.com',
    pass: 'oyekunle1990',
  },
});

module.exports = receiverMail => {
  const mailOptions = {
    from: 'admin@where-to-code.com',
    to: receiverMail,
    subject: 'Welcome to Where to Code.',
    html:
      '<strong>Your Where to Code account was successfully created.</strong>',
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};
