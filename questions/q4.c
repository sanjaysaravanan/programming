#include<stdio.h>

void main() {
    int arr[] = { 5,4,3,2,1,0 };
    int i,j, inv_count = 0, n=6;
    for(i=0; i<n-1; i++)
        for(j=i+1; j<n; j++)
            if(arr[i] > arr[j])
                inv_count++;
    printf("%d", inv_count);
}