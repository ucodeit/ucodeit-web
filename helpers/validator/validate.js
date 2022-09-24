const { assert } = require("joi");

/**
*  @param {AnyObject} input The input of the request to review
*  @param {Schema} schema The Joi Schema of the controller
*/
const validate = function(input, schema){
   if(!input || !schema) {
      throw new Error('Cannot validate, please verify your input and schema');
   }
   
   return assert(input, schema);
}

module.exports = validate;