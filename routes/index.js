var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'UCode-It', 
    eventName: 'index', 
    jsFiles: ['index'], 
    styleSheetFiles: ['main', 'index'] 
  });
});

router.get('/index', function(req, res, next) {
  res.render('index', { 
    title: 'UCode-It', 
    eventName: 'index', 
    jsFiles: ['index'], 
    styleSheetFiles: ['main', 'index'] 
  });
});

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { 
    title: 'Acerca de nosotros', 
    eventName: 'aboutus',
    jsFiles: ['aboutus'],
    styleSheetFiles: ['aboutus', 'main']
  });
});

router.get('/eventos', function(req, res, next) {
  res.render('eventos', { 
    title: 'Eventos', 
    eventName: 'eventos',
    jsFiles: ['ajuste'],
    styleSheetFiles: ['eventos', 'main', 'index']
  });
});

module.exports = router;
