<?php  
	require_once("../conexion.php");
	$nota = $_POST['nota'];
	$imagen = $_FILES['imagen'];
	$allow = array("png","jpg","jpeg");
	if(file_exists($imagen['tmp_name']) || is_uploaded_file($imagen['tmp_name'])) 
	{
		$name = $imagen["name"];	
		$ext = strtolower(pathinfo($name,PATHINFO_EXTENSION));
		if (in_array($ext, $allow))
		{
			if( $imagen['error'] == 0)
			{
				$tmp_name =$imagen["tmp_name"];								
				move_uploaded_file($tmp_name, "../../imagenes/$name");
				$final="imagenes/$name";
				$mysqli->query("update nota set imagen = '$final' where idNota = $nota");
			}				
		}
	}
	$result = $mysqli->query("select * from nota");
	$arr = array();
	if ($result)
	{
		while($row = mysqli_fetch_assoc($result))
			$arr = $row;
		mysqli_free_result($result);
	}
	mysqli_close($mysqli);
	echo json_encode($arr);
?>