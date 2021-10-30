#include<stdio.h>

int main() {
    char *x = "All4One";
    int result=0,i;

    for(i=0;x[i]!='\0';i++){
        if(x[i]>=48 && x[i]<=57)
            result = result + (x[i]-'0');
    }

    printf("%d", result);
    return 0;
}