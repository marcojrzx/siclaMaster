<?php  
	require_once("../conexion.php");
	//$area = $_POST["area"];
	$dato = json_decode(file_get_contents('php://input'), true);
	$area = $dato['area'];
	$result = $mysqli->query("select * from tema where idArea = $area");
	$arr = array();
	while($row = mysqli_fetch_assoc($result))
	{
		$arr[] = $row;
	}
	echo json_encode($arr);
	mysqli_free_result($result);
	mysqli_close($mysqli);
?>