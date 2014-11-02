<?php  
require_once("../conexion.php");
$fecha = date("Y-m-d");
$fecha = $fecha . " 00:00:00";
$result = $mysqli->query("select n.titulo, m.nombre, t.nombre as tipo, u.nombre as usuario from nota n, medio m, user u, tipoNota t, colabora_en ce where n.fecha >= '$fecha' and n.idColaborador = ce.idCE and ce.idMedio = m.id and n.idAdmin = u.idUsuario and n.tipo = t.idTN order by n.fecha desc");
$arr = array();
if ($result)
	while ($row = mysqli_fetch_assoc($result)) 
		$arr[] = $row;	
echo json_encode($arr);
?>