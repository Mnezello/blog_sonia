<?php

include "../class/PHPMailer-master/src/PHPMailer.php";
include "../class/PHPMailer-master/src/SMTP.php";
include "../class/PHPMailer-master/src/Exception.php";

$mail=new \PHPMailer\PHPMailer\PHPMailer(); 

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];
                                   
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.kinghost.net'; 
    $mail->SMTPAuth = true;   
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';  
    $mail->SMTPAutoTLS = false;                                 
    $mail->Username   = 'contato@soniadecarvalho.com.br';
    $mail->Password   = 'F2&01qP*4';                             

    //Remetente
    $mail->Sender = 'contato@soniadecarvalho.com.br'; 
    $mail->From = 'contato@soniadecarvalho.com.br';
    $mail->FromName = 'Contato do site';
    $mail->addAddress('sonia.adv.2008@hotmail.com', 'Sonia');
    $mail->addCC('contato@soniadecarvalho.com.br', 'Copia');   

    //Content
    $mail->isHTML(true);                                 
    $mail->Subject = 'Contato do site';
    $mail->Body    = "Nome: {$name}<br>E-mail: {$email}<br>Menssagem: {$text}";
}

if(!$mail->Send()) {
    http_response_code(500);
    echo "Mensagem não enviada. Mailer Error: " . $mail->ErrorInfo;
} else {
    http_response_code(200);
    echo 'Mensagem enviada com sucesso!';
}

?>