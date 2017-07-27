var nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport('smtps://shaneosullivan4%40gmail.com:pass@smtp.gmail.com');

exports.send = function(req, res){
	console.log(req.body.toAddress);
	console.log(req.body.fromAddress);
	console.log(req.body.mail);
	console.log(req.body.subject);
	if (!req.body) 
		return res.sendStatus(400)
     
    res.json({ message: 'Mail was sent!' });
}