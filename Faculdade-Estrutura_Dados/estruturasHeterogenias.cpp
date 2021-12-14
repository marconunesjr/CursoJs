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

    Coordenada ponto [3];
   

    ponto [0].x = 10;
    ponto [0].y = 20;
    ponto [0].z = 50;

    cout << "Ponto A - x: " << ponto [0].x << endl;
    cout << "Ponto A - y: " << ponto [0].y << endl;
    cout << "Ponto A - z: " << ponto [0].z << endl << endl;

    ponto [1].x = 100;
    ponto [1].y = 200;
    ponto [1].z = 500;

    cout << "Ponto B - x: " << ponto [1].x << endl;
    cout << "Ponto B - y: " << ponto [1].y << endl;
    cout << "Ponto B - z: " << ponto [1].z << endl << endl;

    ponto [2].x = 16;
    ponto [2].y = 25;
    ponto [2].z = 57;

    cout << "Ponto C - x: " << ponto [2].x << endl;
    cout << "Ponto C - y: " << ponto [2].y << endl;
    cout << "Ponto C - z: " << ponto [2].z << endl << endl;

    system("pause");
    return 0;
}