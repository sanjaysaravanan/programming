#include<stdio.h>

void main() {
    int a[3][4] = { 2,4,6,8,10,12,13,10,8,6,4,2 };
    int i=0,j,k=10;
    while(i<3){
        for(j=i+1; j<4; j++) {
            if(a[i][j] > k)
                k=a[i][j];
        }
        i++;
    }
    printf("%d", k);
}