require('dotenv').config();
const nodemailer = require('nodemailer');

const user = process.env.TRANSPORTER_USER;
const pass = process.env.TRANSPORTER_PASS;

// turn on less secure app on the google settings before running this block
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass,
  },
});

/**
 *
 * @param {string} receiverMail
 */
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
