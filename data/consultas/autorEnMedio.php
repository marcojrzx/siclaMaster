<?php  
require_once("../conexion.php");
$dato = json_decode(file_get_contents('php://input'), true);
$id = $dato['medio'];
$result = $mysqli->query("select au.*, ce.idCE from autor au, colabora_en ce where au.idAutor not in (select * from colabora_en where idMedio = $id) and au.idAutor = ce.idAutor"); //Query para sicla
//$result = $mysqli->query("select * from autores where idMedio <> $id"); //Query para sicla2
$arr = array();
if ($result)
	while ($row = mysqli_fetch_assoc($result))
		$arr[] = $row;
echo json_encode($arr);
?>