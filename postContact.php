<?php
if(isset($_POST['mailform']))
{
	if(!empty($_POST['name']) AND !empty($_POST['mail']) AND !empty($_POST['message']))
	{
		$header="MIME-Version: 1.0\r\n";
		$header.='From:"VOTRE NOM"<email-expediteur@example.org>'."\n";
		$header.='Content-Type:text/html; charset="uft-8"'."\n";
		$header.='Content-Transfer-Encoding: 8bit';


		$to      = 'xts.enn@gmail.com';
		$subject = 'Contact - SFDApp';
		$message='
		coucou
		';
     	$headers[] = 'From: Constact <nesta.loisy@gmail.com>';
   
		mail($to, $subject, $message, $headers);

		header("Location: contact.php");
	}
	else
	{
		$msg="Tous les champs doivent être complétés !";
	}
}
?>
