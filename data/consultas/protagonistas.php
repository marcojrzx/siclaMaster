<?php
	require_once("../conexion.php");
	$result = $mysqli->query("select * from protagonista");
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