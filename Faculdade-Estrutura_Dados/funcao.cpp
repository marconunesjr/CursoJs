#include <iostream>
#include <locale.h>
#include <stdlib.h>
#include <string>

using namespace std;

void imprimirMsg();
float calculaImposto();

int main()
{
    setlocale(LC_ALL, "Portugueses");

    float resultado;

    //imprimirMsg();
    resultado = calculaImposto();

    cout << "Resultado do cálculo: " << resultado << endl << endl;

    system("pause");
    return 0;
}

void imprimirMsg()
{
    cout << "Alô Mundo!";
}

float calculaImposto()
{
    float sal;
    float vlrImposto;

    sal = 2000;
    vlrImposto = sal * 0.1;

    return vlrImposto;
}