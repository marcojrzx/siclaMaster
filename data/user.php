<?php
	require_once("conexion.php");
	$user=json_decode(file_get_contents('php://input'), true);// obteniendo json
	$mail = $user['mail'];
	$pss = $user['pass'];
	$query = mysqli_query($mysqli, "select idUsr, nombre, idTipoUsr from usuario where correo = '$mail' and password = $pss");
	if($query)
	{
		$row = mysqli_fetch_assoc($query);
		$id = $row['idUsr'];
		$name = $row['nombre'];
		$tipo = $row['idTipoUsr'];
		session_start();
		$_SESSION['uid'] = $id;
		$_SESSION['unm'] = $name;
		$_SESSION['uty'] = $tipo;
		echo $id;
	}
 ?>