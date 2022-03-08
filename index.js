var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth: {
        user: 'akashbhoyar49@gmail.com',
        pass: 'akash@111'
    },
    connectionTimeout: 5 * 60 * 1000,
}));

var mailOptions = {
    from    : 'akashbhoyar49@gmail.com',
    to      : 'akashbhoyar49@gmail.com',
    subject : 'Sending on mail by using nodemailer',
    text    : `Hi akash thank you for `
}

smtpTransport.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email has been send' + info.response);
    }
});
