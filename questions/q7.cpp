#include <iostream>

using namespace std;

class A
{
    public:
    virtual void fun() { cout << "1"; }
};

class B: public A
{
    public:
    virtual void fun() { cout << "b"; }
};

class C: public B
{
    public:
    virtual void fun() { cout << "3"; }
};

int main()
{
    A *a = new C;
    A *b = new B;
    a->fun();
    b->fun();
    return 0;
}

