<?php
	session_start();
	if (isset($_SESSION['unm']))
	{
		echo $_SESSION['unm'];
	}
?>