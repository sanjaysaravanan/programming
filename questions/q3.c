#include<stdio.h>

int main() {
    int a=10, b=5;
    while(b>0) {
        a-=-b--;
    }
    printf("%d", a);
}