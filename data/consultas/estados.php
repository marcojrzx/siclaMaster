<?php  
	require_once("../conexion.php");
	$result = $mysqli->query("select * from estado");
	$arr = array();
	if ($result) {
		while ($row = mysqli_fetch_assoc($result))
			$arr[] = $row;
		mysqli_free_result($result);
	}
	mysqli_close($mysqli);
	echo json_encode($arr);
?>