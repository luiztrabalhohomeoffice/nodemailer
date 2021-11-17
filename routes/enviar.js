
module.exports = function(app){
    app.get('/enviar', function(req, res){
        const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'endereço de smtp',
    port: 587,
    secure:false,
    auth:{
        user: "email de envio",
        pass: "senha",
    },
    tls:{
        rejecUnauthorized:false,
    },

});

async function run(){
    const mailSend = await transporter.sendMail({
        text:'Texto do E-mail',
        subject:'Assunto do E-mail',
        from:'Luiz Junior<email de envio>',
        to:'email de destino',
        html:`<html>
            <body>
                <h1>Conteudo html</h1>
                <p>apdofasdfoasdfoiasdjf</p>

            </body>
            </html>
        `,
    })
console.log(mailSend)
} 
run();
res.send("Email enviado com sucesso!!");
    });
}