<?php
//...
//Realizando uma consulta no BD através do login e senha recebidos por POST
$login = $_POST['login'];
$pswd = $_POST['pswd'];
$instrucaoSQL = "Select * From Usuario Where login = '$login' And password = '$pswd'";
$result = mysql_query( $instrucaoSQL ) or die(' Ocorreu um erro na execução da instrução: ' . $instrucaoSQL . ' ' .
mysql_error() );
