const Joi = require("joi");

const requestContactFormSchema = Joi.object().keys({
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
})


module.exports = {
   requestContactFormSchema
}