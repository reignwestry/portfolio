<?php 

require_once("./include/fgcontactform.php");

function sendMail(){

   $formproc = new FGContactForm();
   
   //1. Add your email address here.
   //You can add more than one recipients.
   $formproc->AddRecipient('reign@reignwestry.com'); //<<---Put your
   //email address here

   //2. For better security. Get a random string from
// this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('gkEFthfv6gvGAuL');

if(isset($_POST['submitted']))
{
   $fname  = $_POST['fname']; 
   $lname =  $_POST['lname'];
   $receipients = $fname + " " + $lname;
   $email = $_POST['email'];
   $from_address = $_POST['email'];
   $msgType = $_POST['msgTypeOption'];
   $msg = $_POST['message'];
   $message = `<h1>MESSAGE FROM PORTFOLIO CONTACT FORM</h1> \r\n\n
   <p> $msg </p>`;
   
    $to = 'reign@reignwestry.com';
    $subject = $msgType;
    
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    //Additional Headers
    $headers .= `To: Reign <reign@reignwestry.com>, <mail@reignwestry.com> \r\n`;
    $headers .= `From: $fname + " " + $lname + "<" + $from_address + ">" \r\n`;
    
   if($formproc->ProcessForm())
   {
      mail( $to, $msgType, $message, $headers);
        $formproc->RedirectToURL("thank-you.html");
      }
}

}

?>