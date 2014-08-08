<?php 
	require_once("../conexion.php");
	$dato = json_decode(file_get_contents('php://input'), true);
	$idMedio = $dato['medio']['id'];
	$nombre = $dato['nombre'];
	$genero = $dato['genero'];
	$mysqli->query("INSERT INTO autor VALUES(null,'$nombre', '$genero')");
	$idAutor = $mysqli->insert_id;
	$mysqli->query("insert into colabora_en values ($idAutor, $idMedio)");
	$query = $mysqli->query("select * from autor"); 
	$arr = array();
	while ($row = mysqli_fetch_assoc($query)) 
			$arr[] = $row;
	echo json_encode($arr);
	mysqli_free_result($query);
	mysqli_close($mysqli);
?>