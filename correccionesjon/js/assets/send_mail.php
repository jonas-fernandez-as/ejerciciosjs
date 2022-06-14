<?php
if(isset($_POST)){ //si existe el metodo post
    error_reporting(0);

    $name=$_POST["name"];  //ESTABLECEMOS LAS VARIABLES DE CADA UNO DE LOS ELEMENTOS DEL FORMULARIO
    $email=$_POST["email"];
    $subject=$_POST["subject"];
    $comments=$_POST["comments"];

    $domain=$_SERVER["HTTP_HOST"];
    $to = "hemm_@hotmail.com";
    $subject_mail="Contacto desde el formulario del sitio $domain";
    $message="
     
    <p>
    Datos enviados desde el forumario del sitio <b>$domain</b>   
    </p>
    <ul>
     <li>Nombre: <b> $name </b></li>
     <li>Email: <b> $email </b></li>
     <li>Nombre:$subject </li>
     <li>Comentarios:$comments</li>
    </ul>
  ";//mensaje del mail en formato html
  $headers="MIME-Version: 1.0\r\n"."Content-Type:text/html;charset=utf-8\r\n".
  "From:Envío Automático No respoder <no-reply@$domain>"   //tres tipos de cabeceras para enviar el mail

  $send_mail =mail($to,$subject_mail,$message,$headers); //Datos que pide la funcion mail para enviar el mail

  if($send_mail){
    $res=[
        "err"=>false,
        "message"=>"Tus datos han sido enviados"
    ];
  }else{
    $res=[
        "err" => true,
        "message"=> "Error al enviar tus datos. Intenta nuevamente"
    ];
  }

  //header("Acces-Control-Allow-Origin: https://jonmircha.com"); aceptando solo un dominio
  //header("Acces-Control-Allow-Origin:*)aceptando cualquier CORS;
  header('Content-type:application/json');
  echo json_encode($res); //se envia la respuesta del codigo php en json
  exit;

}
