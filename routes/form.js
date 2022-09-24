const express = require("express");
const router = express.Router();
const formControllers = require('../controllers/form');

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

module.exports = router;