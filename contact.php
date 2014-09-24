<?php
// Guardar los datos recibidos en variables:
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
// Definir el correo de destino:
$dest = "losingulars@gmail.com"; 
 
// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
$headers = "From: $name <$email>\r\n";  
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Aqui definimos el asunto y armamos el cuerpo del message
$asunto = $subject;
$cuerpo = $message;
 
// Esta es una pequena validación, que solo envie el correo si todas las variables tiene algo de contenido:
if($name != '' && $email != '' && $subject != '' && $message != ''){
    mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
}
?>