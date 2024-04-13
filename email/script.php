<?php
    require './variables.php';
    // define("ReceiverUserName", "username");
    // define("ReceiverHost", "hostAddress");
    // define("ReceiverPass", "serverPass");
    // define("ReceiverTo", "emailAddress");

 $senderEmail = $_POST['email'];
 $senderfName = $_POST['fname'];
 $senderlName = $_POST['lname'];
 $msgSubject = $_POST['messageOptionsList'];
 $msg = $_POST['message'];

$mailHeader = "From:".$senderfname." ".$senderlname."<".$senderEmail.">\r\n";

// echo $ReceiverUserName;

//sends mail
    mail($ReceiverTo, $msgSubject, $msg, $mailHeader)
    or die("Error!");

    echo "Mail Sent. Thank you " . $senderfname . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    

 
?>