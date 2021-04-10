<?php

require_once 'PHPMailer/PHPMailerAutoload.php';

$mailer = new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port ='465';
$mail->isHTML();
$mail->Username = 'websitecontact@gmail.com';
$mail->Password = 'Seaside99';
$mail->SetFrom('samuelwash19@gmail.com');
$mail->Subject('test');
$mail->Body('test');
$mail->AddAddress('samuelwash19@gmail.com');

$mail->Send();

?>