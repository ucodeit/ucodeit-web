const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'ucodeitexample@gmail.com', // generated ethereal user
      pass: 'gxmoupvfsalvorcw' // generated ethereal password
    },
  });

transporter.verify().then(() =>{
  console.log('Ready for send emails');
});

module.exports = transporter; 
