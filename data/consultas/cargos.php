<?php
	require_once("../conexion.php");
	$dato = json_decode(file_get_contents('php://input'), true);
	$pro = $dato['id'];
	$arr = array();
	$result = $mysqli->query("select ca.* from cargoProtagonista pr, cargo ca where pr.idProtagonista=$pro and pr.idCargo = ca.idCargo");
	if($result)
		while($row = mysqli_fetch_assoc($result))
			$arr[] = $row;
	echo json_encode($arr);
	mysqli_free_result($result);
	mysqli_close($mysqli);
?>