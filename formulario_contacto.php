<?php


$para = 'impresosmendez_4@yahoo.com, mendezcabreramario95@gmail.com';

$asunto = "Cotización desde la  Pagina Web";

$mailheader = "From: ".$_POST["email"]."\r\n";
$mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
$mailheader .= "Content-type: text/html; charset=utf-8\r\n";
$MENSSAGE_BODY= "Nombre: ".$_POST["nombre"]."\r\n";
$MENSSAGE_BODY.= "\n<br>Email: ".$_POST["email"]."\r\n";
$MENSSAGE_BODY.= "\n<br>Celular: ".$_POST["celular"]."\r\n";
$MENSSAGE_BODY.= "\n<br>Mensaje: ".n12br($_POST["mensaje1"])."\r\n";

mail($para,$asunto,$MENSSAGE_BODY,$mailheader);or die ("Error al enviar el email")

header('location:http//nombre_dominio.com')

?>