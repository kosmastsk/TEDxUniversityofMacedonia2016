<?php

$name - $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$captcha;
if(isset($_POST['g-recaptcha-response']))
          $captcha=$_POST['g-recaptcha-response'];

if(!$captcha){
	$fail = "Something went wrong. Please try again!";
	echo "<script type='text/javascript'>alert('$fail');window.location = 'http://www.tedxuniversityofmacedonia.com';</script>";
}

require '../phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'server13.cretaforce.gr';				// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@tedxuniversityofmacedonia.com';                 // SMTP username
$mail->Password = 'TEDxinfo';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->From = $email;
$mail->FromName = $name;	
$mail->addAddress("info.tedxuom@gmail.com");
$mail->AddBCC("kosmastsk@gmail.com", "ContactForm");

$mail->Subject = "New contact form response!";
$mail->Body    = $message;
$mail->AltBody = $message;


if(!$mail->send()) {
	$fail = "Something went wrong. Please try again!";
	echo "<script type='text/javascript'>alert('$fail');window.location = 'http://www.tedxuniversityofmacedonia.com';</script>";
} else {
	$success = "Thank you for contacting TEDxUniversityofMacedonia!";
	echo "<script type='text/javascript'>alert('$success');window.location = 'http://www.tedxuniversityofmacedonia.com';</script>";
}

?>
