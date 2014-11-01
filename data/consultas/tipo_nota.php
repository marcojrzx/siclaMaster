<?php
require_once("../conexion.php");
$result=mysqli_query($mysqli,"SELECT * FROM tipoNota");
$arr = array();
if($result->num_rows > 0) {
 while($row = $result->fetch_assoc()) {
 $arr[] = $row;
 }
 mysqli_free_result($result);
}
echo json_encode($arr);
  mysqli_close($mysqli);
?>
