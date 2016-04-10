var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});


router.post('/email', function (req, res, next) {
    var mailOptions = {
        from: '"'+req.body.name+' 👥" <'+req.body.email+'>', // sender address
        to: 'oktacore.team@gmail.com', // list of receivers
        subject: 'Consulta', // Subject line
        text: req.body.body, // plaintext body
        html: '<b>'+req.body.body+'</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error)
            return res.send({status:404});
        else
            return res.send({status:200});
    });
});
module.exports = router;
