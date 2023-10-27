#include<stdio.h>

int main(int argc, char *argv[])
{
    int num,rev=0,temp,rem;
    printf("enter num");
    scanf("%d",&num);
    temp=num;
    while(temp!=0)
    {
        rem=temp%10;
        rev=rev*10+rem;
        temp/=10;
    }
    printf("revers of num %d is %d,num, rev);
    return 0;
}