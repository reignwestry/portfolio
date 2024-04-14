// // contact Email functionality

// //todo GRAB form values
// //todo check values
// //todo send values
// //todo alert thank you

require('variables.js');

let sender = document.getElementById('email').value
let msgSubject = document.getElementById('messageOptionsList').value 
let msg = document.getElementById('senderMessage').value;


//SMPTJS EMAI
function sendEmail() {
        Email.send({
        Host : eHost,
        Username : User,
        Password : ePassW,
        To : to,
        From : document.getElementById('email').value,
        Subject : msgSubject,
        Body : msg
    }).then(
    message => alert(message)
    );
}

/*
    Mail Client Settings

    Username: reign@reignwestry.com
    Password: 
    Incoming server: mail.reignwestry.com
        IMAP: 993
        POP3: 995
    Outgoing server: mail.reignwestry.com
    SMTP: 465

*/