<?php
	require_once("../conexion.php");
	$result = $mysqli->query("select * from municipio");
	$arr = array();
	if ($result)
		while($row = mysqli_fetch_assoc($result))
			$arr[] = $row;
	echo json_encode($arr);
	mysqli_free_result($result);
	mysqli_close($mysqli);
?>