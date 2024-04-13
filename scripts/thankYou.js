let fname = document.getElementById('fname');
let lname = document.getElemenntById('lname');

let tYmsg = `Thank you for the response. I will respond as soon as possible.`;

/*
    TODO
     Hide the form
     alert Thank you message in place of the form


*/

function hideForm() {
    document.getElementById('form').style.display = 'none';
}

function showThankYou() {

    document.getElementById('contactFormBox').style.backgroundColor = '#006400';
    document.getElementById("contactFormBox").style.color='#fff';
    document.getElementById("contactFormBox").innerHTML = `<h1> ${tYmsg} + </h1>`;
}


function thankYou() {
    preventDefault();
    hideForm;
    showThankYou;
}