<?php
	session_start();
	$usr = $_SESSION['uid'];
	require_once("../conexion.php");
	$datos = json_decode(file_get_contents('php://input'), true);
	$autor = $datos['autor']['idCE'];
	$titulo = $datos['titulo'];
	$sintesis = $datos['sintesis'];
	$texto = $datos['texto'];
	$tipo = $datos['tipo']['idTN'];
	$pagina = $datos['pagina'];
	$fecha = $datos['fecha'];
	$cargo = $datos['cargo']['idCP'];
	$pos = $datos['posneg'];
	$subtema = $datos['subtema']['idSubtema'];
	$otroSB = $datos['otrosSub'];
	$otrosCG = $datos['otrosCargo']
	$seccion = $datos['seccion'];
	$municipio = $datos['municipio']['idMunicipio'];
	$url = $datos['url'];
	$per = $datos['num'];
	$mysqli->query("insert into nota values(null,'$titulo','$fecha',$pagina,$tipo,'$pos','$sintesis','$texto',$per,'$url',null,$municipio,$usr,$autor)");
	$nota = mysqli_insert_id($mysqli);
	$mysqli->query("insert into trata_de values($nota,$subtema)");
	for ($i = 0; $i < count($otrosSub);$i++)
		if ($otrosSub[$i]!=null)
				$mysqli->query("insert into trata_de values($nota,$otrosSub[$i]['idSubtema'])");
	$mysqli->query("insert into notaProtagonista values($nota,$cargo,1)");
	for ($i=0; $i < count($otrosCG); $i++)
		if($otrosCG[$i]!=null)
				$mysqli->query("insert into notaProtagonista values($nota,$otrosCG[$i]['idCP'],2)")
	echo $nota;
?>