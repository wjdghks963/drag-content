## react-beautiful-dnd

react-beautiful-dnd 라이브러리를 이용해 dragDrop 기능을 구현함.

설치

```
npm i react-beautiful-dnd
npm i --save-dev @types/react-beautiful-dnd
```

#### DragDropContext은 해당 기능이 필요한 component에서 사용하면 된다.

onDragEnd라는 prop이 필요하다. drop이 끝난 후 실행되는 함수.
children도 필요하다.

여기는 Droppable, Draggable component를 둘 수 있는 공간이 된다.

#### Droppable

Draggable Item을 드랍을 할 수 있는 공간이다.

droppableId라는 prop이 필요하다. = drop이 가능한 판대기 ID
children도 필요하다.

#### Draggable

Droppable내에서 움직일 수 있는 Item이다.

1. dragHandleProps은 해당 태그를 통해 움직일 수 있는것이다(마우스로 클릭하고 잡는, 찝힌 부분)

2. draggableProps은 잡은 태그를 따라 움직이는 태그가 된다.(움직이는 아이템)

3. Draggable에서 key와 draggableId는 같아야 한다.

```javascript
<Draggable key={toDo} draggableId={toDo} index={index}>
  {(magic) => (
    <li
      ref={magic.innerRef}
      {...magic.draggableProps}
      {...magic.dragHandleProps}
    >
      one
    </li>
  )}
</Draggable>
```
