<?php
require_once("../conexion.php");
$fechaActual = mysqli_query($mysqli,"SELECT fecha FROM noticias
ORDER BY 'fecha' DESC
LIMIT 1");

$a = array();
if($fechaActual->num_rows > 0) {
 //while($row = $fechaActual->fetch_field()) {
 $a = $fechaActual->fetch_object();
 //}
}

$result=mysqli_query($mysqli,
"SELECT noticias.autor,noticias.fecha,noticias.titulo,noticias.sintesis, noticias.img8col AS portada, periodicos.imagen AS imgPeriodico,
periodicos.nombre as nombrePeriodico, periodicos.idPeriodico as idMedio
FROM noticias
INNER JOIN periodicos
ON noticias.periodico=periodicos.id 
WHERE  noticias.fecha= '0000-00-00' ");//'$a->fecha'

$arr = array();
if($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
  	$arr[] = $row;
  }
}
echo json_encode($arr);
 mysqli_free_result($result);
  mysqli_close($mysqli);
?>
