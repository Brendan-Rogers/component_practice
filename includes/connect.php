<?php

$user = 'root';
$pass = 'root';

try {
	$conn = new PDO('mysql:host=localhost;dbname=tempusers', $user, $pass);
} catch (PDOException $exception) {
	echo 'connect error' . $exception->getMessage();
}



?>