<?php
	require_once("../conexion.php");
	$dato = json_decode(file_get_contents('php://input'), true);
	$id = $dato['idProtagonista'];
	$arr = array();
	$result = $mysqli->query("select * from cargo where idCargo not in(select idCargo from cargoProtagonista where idProtagonista=$id)");
	if ($result)
	{
		while($row = mysqli_fetch_assoc($result))
			$arr[] = $row;
		mysqli_free_result($result);	
	}
	echo json_encode($arr);
	mysqli_close($mysqli);
?>