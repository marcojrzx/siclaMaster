<?php  
	$mysqli = new mysqli("localhost","root","","sicla");	
	if ($mysqli->connect_errno)
	{
		$mysqli = new mysqli("localhost","root","root","sicla");
		if ($mysqli->connect_errno)
		{
			echo("Fallo al contenctar a MySQL: (".$mysqli->connect_errno.") ".$mysqli->connect_error);
			exit();
		}
	}
?>