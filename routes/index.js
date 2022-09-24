let express = require('express');
let router = express.Router();
let aboutUsRouter = require('./about-us');
let eventsRouter = require('./events');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'UCode-It', 
    eventName: 'index', 
    jsFiles: ['index'], 
    styleSheetFiles: ['main', 'index'],
    sucess_msg: req.flash('sucess_msg')[0],
    error_msg: req.flash('error_msg')[0],
  });
});

router.get('/index', function(req, res, next) {
  res.redirect(404, 'dafa')
  res.render('index', { 
    title: 'UCode-It', 
    eventName: 'index', 
    jsFiles: ['index'], 
    styleSheetFiles: ['main', 'index'],
    sucess_msg: req.flash('sucess_msg')[0],
    error_msg: req.flash('error_msg')[0],
  });
});

router.use(aboutUsRouter);
router.use(eventsRouter);

module.exports = router;
