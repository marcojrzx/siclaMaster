<?php
	require_once("../conexion.php");
	$datos = json_decode(file_get_contents('php://inputs'), true);
	$medio = $datos['medio']['idMedio'];
	$autor = $datos['autor']['idAutor'];
	$titulo = $datos['titulo'];
	$sintesis = $datos['sintesis'];
	$texto = $datos['texto'];
	$tipo = $datos['tipo'];
	$pagina = $datos['pagina'];
	$fecha = $datos['fecha'];
	$protagonista = $datos['protagonista']['idProtagonista'];
	$cargo = $datos['cargo']['idCargo'];
	$pos = $datos['pos-neg'];
	$tema = $datos['tema']['idTema'];
	$subtema = $datos['subtema']['idSubtema'];
	$otro = $datos['otros']['idTema'];
	$seccion = $datos['seccion'];
	$municipio = $datos['municipio']['idMunicipio'];
	$portada = $datos['portada'];
?>