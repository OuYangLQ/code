#ifndef _List_H

struct Node;
typedef struct Node *   PtrtoNode;
typedef PtrtoNode   List;
typedef PtrtoNode   Position;

typedef int ElementType;

List MakeEmpty( List L);
int IsEmpty( List L);
int IsLast( Position P, List L);
Position Find( ElementType X, List L);
void Delete( ElementType X, List L);
Position FindPrevious( ElementType X, List L);
void Insert( ElementType X, List L, Position P);
void DeleteList( List L);
Position Header(List L);
Position first( List L);
Position Advance( Position P);
ElementType Retrieve( Position P);

#endif  /* _List_H */
