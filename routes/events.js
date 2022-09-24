let express = require('express');
let router = express.Router();


router.get('/eventos', function(req, res, next) {
   res.render('eventos', { 
     title: 'Eventos', 
     eventName: 'eventos',
     jsFiles: ['ajuste'],
     styleSheetFiles: ['eventos', 'main', 'index']
   });
 });
module.exports = router;
