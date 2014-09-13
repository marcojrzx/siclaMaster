<?php  
require_once("../conexion.php");
$fecha = date("Y-m-d");
$fecha = $fecha . " 00:00:00";
//$result = $mysqli->query("select n.titulo, m.nombre, n.tipo, u.nombre as usuario from nota n, medio m, usuario u where n.fecha >= '$fecha 00:00:00' and n.idMedio = m.idMedio and n.idAdmin = u.idUsuario order by n.fecha desc");
$result = $mysqli->query("select n.titulo, m.nombre, n.tipo from noticias n, periodicos m where n.fecha >= '$fecha 00:00:00' and n.periodico = m.id order by n.fecha desc");
$arr = array();
if ($result)
	while ($row = mysqli_fetch_assoc($result)) 
		$arr[] = $row;	
echo json_encode($arr);
?>