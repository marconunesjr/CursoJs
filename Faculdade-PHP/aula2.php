<?php

$var1 = 10;
$var2 = 20;

if($var1 > $var2) { //Usando IF para validar
    echo '$var1 é maior que $var2';
}else{ //Usando else para validar em caso de erro no IF
    echo '$var1 é menor que $var2';
} 


// Usando Elseif / else if

$var1 = 10
$var2 = 20

if($var1 > $var2) {
    echo '$var1 é maior que $var2';
}elseif($var1 < $var2){
    echo "$var1 é menor que $var2";
}else{
    echo "$var1 e $var2 são iguais";
}

// Usando SWITCH


switch($var1){
    case 10:
        echo "var1 é igual a 10";
        break;
        case 20:
            echo "var1 é igual a 20";
            break;
            default:
            echo "var1 não é igual a 10 e nem a 20";
            break;
        }
        

// Usando END


$var1 = 10;
$var2 = 10;

if($var1 > $var2):
    echo "$var1 é maior que $var2";
    elseif($var1 < $var2?):
        echo "$var1 é menor que $var2";
    else:
        echo "$var1 e $var2 são iguais";
    endif;

// Usando Operador ternário


$var1 = 10;
$var2 = ($var1 >= 10) ? 11 : 9;
echo $var2; //imprimirá 11