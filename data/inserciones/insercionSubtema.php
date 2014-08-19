<?php  
	require_once("../conexion.php");
	$dato = json_decode(file_get_contents('php://input'), true);
	$tema = $dato['tema']['idTema'];
	$nombre = $dato['nombre'];
	$mysqli->query("insert into Subtema values(null, '$nombre', $tema)");
	$result = $mysqli->query("select * from Subtema");
	$arr = array();
	while ($row = mysqli_fetch_assoc($result)) 
	{
		$arr[] = $row;	
	}
	echo json_encode($arr);
	mysqli_free_result($result);
	mysqli_close($mysqli);
?>