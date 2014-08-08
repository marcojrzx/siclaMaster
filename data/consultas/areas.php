<?php  
	require_once("../conexion.php");
	$query = $mysqli->query("select * from Area");
	$arr = array();
	while ($row = mysqli_fetch_assoc($query)) 
	{
		$arr[] = $row;	
	}
	echo json_encode($arr);
	mysqli_free_result($query);
	mysqli_close($mysqli)
?>