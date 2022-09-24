const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'contacto@ucodeit.com.mx', // generated ethereal user
      //pass: 'gxmoupvfsalvorcw' // generated ethereal password
      pass: 'e0ImggA0g1'
    },
  });

transporter.verify().then(() =>{
  console.log('Ready for send emails');
});

module.exports = transporter; 

