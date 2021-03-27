<?php
     $to      = 'xts.enn@gmail.com';
     $subject = 'le sujet';
     $message = 'Bonjour !';
     $headers = 'From: nesta.loisy@gmail.com' . "\r\n" .
     'Reply-To: nesta.loisy@gmail.com' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $message, $headers);
 ?>