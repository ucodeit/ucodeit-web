let express = require('express');
let router = express.Router();


router.get('/xxxvii-semana-interdisciplinaria', function(req, res, next) {
   res.render('xxxvii-semana-interdisciplinaria', { 
     title: 'XXXVII Semana Interdisciplinaria', 
     eventName: 'eventos',
     jsFiles: ['ajuste'],
     styleSheetFiles: ['eventos', 'main', 'index']
   });
 });
module.exports = router;
