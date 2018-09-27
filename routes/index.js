'user strict'
var nodemailer = require('nodemailer')

module.exports = function(app){
    app.get('/',(res,rep)=>{
        rep.render('index.ejs')
    })

    app.get('/check',(res,rep)=>{
        rep.render('res.success.ejs') 
    })
    
    app.post('/sendmailinfor',(req,rep)=>{
        var post = req.body
        var name = post.name
        var phone = post.phone
        var email = post.email
        var message = post.message
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'culuvquynh@gmail.com',
              pass: 'nhocvipac1'
            }
          })
          var mailOptions = {
            from: 'culuvquynh@gmail.com',
            to: 'nntd290897@gmai.com',
            subject: 'Connect in website',
            text: 'Have one connect with name : ' + name + ' and phone : '+phone+' and email: ' + email  + ' and message: ' + message  
          }
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error)
              rep.render('res.fail.ejs') 
            } else {
              console.log('Email sent: ' + info.response)
              rep.render('res.success.ejs') 

            }
          })
    })
    app.get('*', function (res, rep) {
        rep.render('error404.ejs')
    })
}