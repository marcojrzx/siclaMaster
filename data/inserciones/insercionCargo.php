<?php
	require_once("../conexion.php");
	$dato = json_decode(file_get_contents('php://input'), true);
	$nombre = $dato['nombre'];
	$mysqli->query("insert into cargo values (null,'$nombre')");
	$result = $mysqli->query("select * from cargo");
	$arr = array();
	if($result)
	{
		while($row = mysqli_fetch_assoc($result))
			$arr[] = $row;
		mysqli_free_result($result);
	}
	echo json_encode($arr);
	mysqli_close($mysqli);
?>