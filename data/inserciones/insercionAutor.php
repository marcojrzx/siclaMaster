<?php 
	require_once("../conexion.php");
	$dato = json_decode(file_get_contents('php://input'), true);
	$idMedio = $dato['medio'];
	$nombre = $dato['nombre'];
	$genero = $dato['genero'];
	$mysqli->query("INSERT INTO autores (nombre, idMedio) VALUES('$nombre', $idMedio)");
	$query = $mysqli->query("select * from autores"); 
	$arr = array();
	while ($row = mysqli_fetch_assoc($query)) 
			$arr[] = $row;
	echo json_encode($arr);
	mysqli_free_result($query);
	mysqli_close($mysqli);
?>