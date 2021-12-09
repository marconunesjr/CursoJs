<?php
$instrucaoSQL = "Select nome, cpf, telefone From Cliente";
//a variável $dsn, abaixo, corresponde à instação da classe PDO, inicializada na conexão com o BD
$resultSet = $dsn->query($sql);
while ($row = $resultSet->fetch()) {
echo $row['nome'] . "\t";
echo $row['cpf'] . "\t";
echo $row['telefone'] . "\n";
}

//...
while ($row = $resultSet->fetch(PDO::FETCH_ASSOC)) {
    //...
    }