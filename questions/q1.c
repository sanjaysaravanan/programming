#include<stdio.h>


int fun(int a,int b){
    if(b==0) return a;
    if(a%2 ==0) {
        fun(a+1,b-1);
    }
    return fun(a/2,b/2);
}

// 1<<0 ---> 1
// 1<<1 ---> 2
// i<<3 ---> 8
// 1<<2 ---> 47425

int main() {
    printf("%d", 1<<2);
    return 0;
}