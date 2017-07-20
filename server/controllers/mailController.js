const smtpTransport = require('nodemailer-smtp-transport')
const nodemailer = require('nodemailer')

const mailController = {}

mailController.post = (req, res) => {
  const { name, email, message, to } = req.body
  let transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: 'saulpolo95@gmail.com', // Your email id
      pass: 'poloboy1' // Your password
    }
  }))
  var mailOptions = {
    from: 'saulpolo95@gmail.com', // sender address
    to: `info@guiacomercialtijuana.com, ${to}`, // list of receivers
    subject: `Email from ${name} -- Healthcare Baja`, // Subject line
    //  text: `Email: ${email} message: ${message}` //, // plaintext body
    html: `<div>
        <h1>Healthcare Baja </h1> </br>
        Email from: <b>${name}</b>  </br>
        ${message} </br>
        Contact me back at: <b>${email}</b>
        <p>Do not respond this email as it is an automated message, thank you!</p>
        <img src='https://media.tenor.com/images/1e0a8c05fa4735cbfc94c8fa337b305c/tenor.gif' />
      </div>` // You can choose to send an HTML body instead
  }

  transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
    res.json({yo: 'error'})
  } else {
    console.log('Message sent: ' + info.response)
    res.json({yo: info.response})
  }
})
}

module.exports = mailController
