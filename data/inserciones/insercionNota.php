<?php
	require_once("../conexion.php");
	$datos = json_decode(file_get_contents('php://input'), true);
	$medio = $datos['medio']['id'];
	$autor = $datos['autor']['id'];
	$titulo = $datos['titulo'];
	$sintesis = $datos['sintesis'];
	$texto = $datos['texto'];
	$tipo = $datos['tipo'];
	$pagina = $datos['pagina'];
	$fecha = $datos['fecha'];
	$protagonista = $datos['protagonista']['idProtagonista'];
	$cargo = $datos['cargo']['idCargo'];
	$pos = $datos['posneg'];
	$tema = $datos['tema']['idTema'];
	$subtema = $datos['subtema']['idSubtema'];
	$otro = $datos['otros']['idTema'];
	$seccion = $datos['seccion'];
	$municipio = $datos['municipio']['idMunicipio'];
	//$url = $datos['url'];
	$url = null;
	$per = $datos['num'];
	$mysqli->query("insert into nota values(null,'$titulo','$fecha',$pagina,'$tipo','$pos','$sintesis','$texto',$per,'$url',null,$municipio,1,$autor,$medio,$protagonista)");
	$arr = mysqli_insert_id($mysqli);
	echo $arr;
?>