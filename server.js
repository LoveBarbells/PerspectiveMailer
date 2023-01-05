const { request } = require('express');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


const PORT = process.env.PORT || 5000;


//middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/' , (req, res)=>{

res.sendFile('./public/index.html')




} )

app.post('./' , (req, res)=>{


console.log(req.body)

const transporter = nodemailer.createTransport({

    service:gmail,
    auth:{

        user:'kenanwebtest@gmail.com',
        pass:'ILoveTesting'
    }
})

const mailOptions = {

    from:request.body.email,
    to: 'kenanwebtest@gmail,com',
    subject: 'Message from ${req.body.email}: ${req.body.subject}',
    text:req.body.message


}

transporter.sendMail(mailOptions, (error,info)=>{
if(error){
    console.log(error);
    res.send('error');
}else{

    console.log('email sent');
    res.send('success');
};


});

})

app.listen(PORT, ()=>{


    console.log('Server running on hopes and dreams ${PORT}')
})