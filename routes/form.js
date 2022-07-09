const express = require("express");
const transporter = require('./../src/config/mail');
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("formulario", {
    title: "Unete",
    eventName: "formulario",
    jsFiles: ["formulario"],
    styleSheetFiles: ["formulario", "main", "index"],
  });
});

router.post("/", (req, res, next) => {
  let datos = req.body;
  let envio = envioDatos(datos);
  envio.then(response =>{
    console.log(response);
      res.send('<script>alert("Tus datos han sido enviados"); window.location.href = "/formulario"; </script>');
  })
});

async function envioDatos(req){
  let envio = await transporter.sendMail({
    from: 'Datos de aspirante <ucodeitexample@gmail.com>', // sender address
    to: "ucodeitexample@gmail.com", // list of receivers
    subject: "Nuevo alumno", // Subject line
    html: `<b>${req.nombre}</b> 
    <b>${req.telefono}</b>
    <b>${req.email}</b>
    <b>${req.carrera}</b> 
    <b>${req.semestre}</b>
    <b>${req.skills}</b>
    <b>${req.aboutYou}</b>`, // html body
  });

  return envio;
}

module.exports = router;
