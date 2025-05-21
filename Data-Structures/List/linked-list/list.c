#include "list.h"

struct Node 
{
    ElementType Element;
    Position Next;
};

int IsEmpty( List L)
{
    return L->Next == NULL;
}