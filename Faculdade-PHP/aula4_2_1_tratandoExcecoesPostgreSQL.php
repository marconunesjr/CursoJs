<?php
...
try {
$dsn = new PDO("pgsql:host=". HOST .
";port=".PORT.";dbname=" . DBNAME . ";user=" . USER .
";password=" . PASSWORD, array(PDO::ATTR_PERSISTENT => true));
} catch (PDOException $e) {
echo 'A conexão falhou e retornou a seguinte mensagem de erro: ' . $e->getMessage();
}