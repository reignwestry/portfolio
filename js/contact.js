document.getElementById("submitBtn").addEventListener('click', sendMessage());


//todo
//note
//objective
//idea
//fixme


function sendMessage() {
    //todo 1.GET data
    const fname = document.querySelector('.fname').value;
    const lname = document.querySelector('.lname').value;
    const clientEmail = document.querySelector('.client-email').value;
    const emailType = document.querySelector('.email-type').value;
    const clientMessage = document.querySelector('.client-message').value;

    //Check if data is blank
    if (fname || lname || clientEmail || emailType || clientMessage != 0 || undefined) {
        isNotEmpty(fname);
        isNotEmpty(lname);
        isNotEmpty(clientEmail);
        isNotEmpty(emailType);
        isNotEmpty(clientMessage);
    }

    //Checks if email is a string
    isEmail(clientEmail);

}

//todo 2. Check data

//todo 2. Check data is blank
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

//todo 2.Check if a string is an email

//todo 3.ENCRYPT data


//todo 4.SEND data
function sendData(fname, lname, clientEmail, emailType, clientMessage) {
    //PUSH data to Email: reign@reignwestry.com

}