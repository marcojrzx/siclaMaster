<?php
	require_once("../conexion.php");
	$dato = json_decode(file_get_contents('php://input'), true);
	$pro = $dato['protagonista'];
	$arr = array();
	$result = $mysqli->query("select ca.*, pr.idCP from cargoProtagonista pr, cargo ca where pr.idProtagonista=$pro and pr.idCargo = ca.idCargo");
	if($result)
	{
		while($row = mysqli_fetch_assoc($result))
			$arr[] = $row;
		mysqli_free_result($result);			
	}
	echo json_encode($arr);
	mysqli_close($mysqli);
?>