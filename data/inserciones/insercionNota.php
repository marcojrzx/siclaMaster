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
	$subtema = $datos['subtema']['idSubtema'];
	$otroSB = $datos['otrosSub'];
	$otroPT = $datos['otrosPT'];
	$otrosCG = $datos['otrosCargo']
	$seccion = $datos['seccion'];
	$municipio = $datos['municipio']['idMunicipio'];
	$url = $datos['url'];
	$per = $datos['num'];
	$mysqli->query("insert into nota values(null,'$titulo','$fecha',$pagina,'$tipo','$pos','$sintesis','$texto',$per,'$url',null,$municipio,1,$autor,$medio,$protagonista)");
	$nota = mysqli_insert_id($mysqli);
	$mysqli->query("insert into trata_de values($nota,$subtema)");
	for ($i = 0; $i < count($otrosSub);$i++)
		if ($otrosSub[$i]!=null)
				$mysqli->query("insert into trata_de values($nota,$otrosSub[$i]['idSubtema'])");
	echo $nota;
?>