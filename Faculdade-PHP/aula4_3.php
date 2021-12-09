<?php
class Fruta
//Propriedades ou atributos da Classe
var $nome;
var $tipo;
//Construtor da Classe: Essa função é executada todas as vezes em que uma instância da classe é criada.
//Como abaixo, essa função pode ser vazia. Ou seja, não realiza nenhuma ação.
public function __construct(){ }
public function setNome($nome)
{
$this->nome = $nome;
}
public function getNome()
{
return $this->nome;
}
public function setTipo($tipo)
{
$this->tipo = $tipo;
}
public function getTipo()
{
return $this->tipo;
}
}


include "fruta.class.php";

$fruta1 = new Fruta();
$fruta1->setNome("morango");
$fruta1->setTipo("vermelha");

$fruta2 = new Fruta();
$fruta2->setNome("laranja");
$fruta2->setTipo("cítrica");