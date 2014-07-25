<?php
require_once("conexion.php");
$idMedio = $_GET['id'];
$arr = array();
$result=mysqli_query($mysqli,"SELECT id, nombre FROM autores WHERE idMedio='$idMedio' ");
if($result->num_rows > 0) {
 while($row = $result->fetch_assoc()) {
 $arr[] = $row;
 }
}
echo json_encode($arr);
mysqli_free_result($result);
mysqli_close($mysqli);
?>
