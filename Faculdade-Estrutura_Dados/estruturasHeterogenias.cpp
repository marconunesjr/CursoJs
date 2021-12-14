#include <iostream>
#include <locale.h>
#include <stdlib.h>
#include <string>

using namespace std;

int main()
{
    setlocale(LC_ALL, "Portugueses");

    int x, y, z;

    x = 10;
    y = 20;
    z = 50;

    cout << "Coordenada x: " << x << endl;
    cout << "Coordenada y: " << y << endl;
    cout << "Coordenada z: " << z << endl;

    system("pause");
    return 0;
}