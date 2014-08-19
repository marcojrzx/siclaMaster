<?php
	require_once("../conexion.php");
	$datos = json_decode(file_get_contents('php://input'), true);
	$tema = $datos['tema'];
	$arr = array();
	$result = $mysqli->query("select * from subtema where idTema = $tema");
	if($result)
		while($row = mysqli_fetch_assoc($result))
			$arr[] = $row;
	echo json_encode($arr);
	mysqli_free_result($result);
	mysqli_close($mysqli);
?>