<?php
if(isset($_POST['submit'])) {
$name = $_POST['name'];
$subject = $_POST['subject'];
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "info@elmarrashidoglu.com";
$header = "From: $mailFrom";
$txt = "You have received a new e-mail from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $header);
header("Location: /index.html?mailsend");
header("Location: /about.html?mailsend");

}
?>