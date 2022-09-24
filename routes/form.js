const express = require("express");
const Joi = require("joi");
const router = express.Router();
const formControllers = require('../controllers/form');
//Se crea un esquema Joi en donde definimos los campos que vamos a validar
const schema = Joi.object({
  //Nombre será un string con un minimo de 3 caracteres y la regex lo que va aceptar es palabras de la Aa-Zz, mas especiales y espacios
  nombre: Joi.string()
    .min(3)
    .pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .required(),
  //telefono lo manejaremos como string para que puedar usar el metodo lenght para el tamaño,y el regex significa que solo acpeta numeros
  telefono: Joi.string().length(10).pattern(/^\d+$/).required(),
  //Email igual sera un string do+nde el dominio minimo tiene que tener dos caracteres y el regex solo acepta alfanumericos, cualquier caracter
  //especial mandara error
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  //Los demás no tiene algo agregado solo son requeridos los campos de skills y about you tiene que tener min 10 caracteres
  carrera: Joi.string().required(),
  semestre: Joi.number().required(),
  skills: Joi.string().min(10).required(),
  aboutYou: Joi.string().min(10).required(),
});

router.get("/", function (req, res, next) {
  res.render("formulario", {
    title: "Unete",
    eventName: "formulario",
    jsFiles: ["formulario"],
    styleSheetFiles: ["formulario", "main", "index"],
    alert: undefined,
    sucess_msg: req.flash('sucess_msg')[0],
    error_msg: req.flash('error_msg')[0],
  });
});

router.get("/response", function (req, res, next) {
  cookie = req.flash("res");
  if ( !cookie.includes("true")) {
    res.redirect("/formulario");
  } else {
    res.render("response", {
      title: "Sus datos han sido enviados",
      eventName: "aboutus",
      jsFiles: ["aboutus"],
      styleSheetFiles: ["aboutus", "main"],
    });
  }
});

router.post("/", formControllers.contactForm);

//Nuestro metodo para el envio de datos (funcion async/await)

module.exports = router;


{
  //Obtenemos los datos de nuestro body
  const datos = req.body;

  //Vamos a letiable para nuestro esquema donde guardara si los datos son validos o no
  const { error, pass } = schema.validate({
    nombre: datos.nombre,
    telefono: datos.telefono,
    email: datos.email,
    carrera: datos.carrera,
    semestre: datos.semestre,
    skills: datos.skills,
    aboutYou: datos.aboutYou,
  });
  //Si no hay error seguira con el proceso de la peticion
  if (!error) {
    //Almacenamos el metodo enviarDatos para manejar la promesa
    let envio = envioDatos(datos);
    envio
      //Si se cumple
      .then((response) => {
        console.log(response);
        req.flash("res", "true");
        res.redirect("/formulario/response");
      })
      //Si manda error
      .catch((err) => {
        console.log(err);
        res.status(404).render("formulario", {
          title: "Unete",
          eventName: "formulario",
          jsFiles: ["formulario"],
          styleSheetFiles: ["formulario", "main", "index"],
          alert: true,
        });
      });
    //Si manda error la validación de datos
  } else {
    res.status(400).json({ error: error });
  }
}