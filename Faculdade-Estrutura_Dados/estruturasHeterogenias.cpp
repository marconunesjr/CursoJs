#include <iostream>
#include <locale.h>
#include <stdlib.h>
#include <string>

using namespace std;

struct Coordenada
{
    int x, y, z;
};

int main()
{
    setlocale(LC_ALL, "Portugueses");

    Coordenada pontoA;
    Coordenada pontoB;
    Coordenada pontoC;

    pontoA.x = 10;
    pontoA.y = 20;
    pontoA.z = 50;

    cout << "Coordenada x: " << pontoA.x << endl;
    cout << "Coordenada y: " << pontoA.y << endl;
    cout << "Coordenada z: " << pontoA.z << endl;

    pontoB.x = 100;
    pontoB.y = 200;
    pontoB.z = 500;

    cout << "Coordenada x: " << pontoB.x << endl;
    cout << "Coordenada y: " << pontoB.y << endl;
    cout << "Coordenada z: " << pontoB.z << endl;

    pontoC.x = 16;
    pontoC.y = 25;
    pontoC.z = 57;

    cout << "Coordenada x: " << pontoC.x << endl;
    cout << "Coordenada y: " << pontoC.y << endl;
    cout << "Coordenada z: " << pontoC.z << endl;

    system("pause");
    return 0;
}