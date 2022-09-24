let express = require('express');
let router = express.Router();

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { 
    title: 'Acerca de nosotros', 
    eventName: 'aboutus',
    jsFiles: ['aboutus'],
    styleSheetFiles: ['aboutus', 'main']
  });
});


module.exports = router;
