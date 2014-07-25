<?php
require_once("../conexion.php");
$result=mysqli_query($mysqli,"SELECT id, nombre FROM medio");
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
