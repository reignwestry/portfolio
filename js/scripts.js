// // contact Email functionality

// //todo GRAB form values
// //todo check values
// //todo send values
// //todo alert thank you

// const receivingEmail = "mailto: reign@reignwestry.com";

// function sendMessage(e) {

//     e.preventDefault(); //prevents page reload
    
//     grabFormData(fname, lname, phoneNumber, email, messageType, message)
    
//     alertFormData(fname, lname, phoneNumber, messageType, message)
    
//     // if()
// }
// function grabFormData(fname, lname, phoneNumber, email, messageType, message) {
//     let fname = document.getElementById('fname').value;
//     let lname = document.getElementById('lname').value;
//     let phoneNumber = document.getElementById('phoneNumber').value;
//     let email = document.getElementById('email').value;
//     let messageType = document.getElementById('messageOptionsList').value;
//     let message = document.getElementById('senderMessage').value;

    
// }
// function alertFormData(fname, lname, phoneNumber, messageType, message) {
//         alert(
//         'fname: ' + fname + '<br>' +
//         'lname: ' + lname + '<br>' +
//         'Phone Number: ' + phoneNumber + '<br>' +
//         'email: ' + email + '<br>' +
//         'Message Type: ' + messageType + '<br>' +
//         'Message: ' + message + '<br>'
    
//     )
// }

// function isNotEmpty(value) {
//     if (value == null || typeof value == 'undefined') return false;
//     return (value.length > 0);
// }

// function isEmail(email) {
//  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//  return regex.test(String(email).toLowerCase());
// }

// function sendEmail() {
//     window.open('mailto:reign@reignwestry.com?subject=subject&body=body')
// }
const User = "reign@reignwestry.com"
const eHost = "mail.reignwestry.com"
const ePassW = "rDestiny@1782"
const to = 'reign@reignwestry.com'
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