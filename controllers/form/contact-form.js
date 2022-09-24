const bodyValidator = require('../../helpers/validator/validate');
const transporter = require("../../src/config/mail");
const schmas = require('./schema');

const contactForm = async function(req, res, next) {
   const args = {
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      email: req.body.email,
      carrera: req.body.carrera,
      semestre: req.body.semestre,
      skills: req.body.skills,
      aboutYou: req.body.aboutYou, 
   }
   try {
      bodyValidator(args, schmas.requestContactFormSchema);
   }
   catch(error) {
      console.error(error);
      req.flash('error_msg', 'Hubo un error al procesar los datos que esta intentando enviar');
      res.redirect('/formulario');
   }

   try {
      envioDatos(args);
      req.flash("sucess_msg", "Gracias por contarnos sobre ti, en menos de 72 horas te responderemos!");
      res.redirect("/");
   }
   catch(error) {
      console.error(error);
      req.flash('error_msg', 'Tenemos problemas para procesar su petición, intentelo más tarde o si el problema persiste contacte a soporte');
      res.redirect('/formulario');
   }
}

async function envioDatos(input) {
   let envio = await transporter.sendMail({
     from: "Datos de aspirante <contacto@ucodeit.com.mx>",
     to: "brandon.gamboa@ucodeit.com.mx, david.arellano@ucodeit.com.mx",
     subject: "Nuevo aspirante",
     html: `<b>Nombre del aspirante:</b> ${input.nombre}</br> 
     <b>Número de telefono:</b> ${input.telefono}</br>
     <b>Correo electrónico:</b> ${input.email}</br>
     <b>Carrera:</b> ${input.carrera}</br> 
     <b>Semestre:</b> ${input.semestre}</br>
     <b>Skills:</b> ${input.skills}</br>
     <b>Información adicional sobre el aspirnte:</b> ${input.aboutYou}`,
   });

   return envio;
 }
 

module.exports = contactForm;