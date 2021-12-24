## react-beautiful-dnd

react-beautiful-dnd 라이브러리를 이용해 dragDrop 기능을 구현함.

설치

```javascript
npm i react-beautiful-dnd
npm i --save-dev @types/react-beautiful-dnd
```

#### DragDropContext은 해당 기능이 필요한 component에서 사용하면 된다.

onDragEnd라는 prop이 필요하다. drop이 끝난 후 실행되는 함수.
children도 필요하다.

여기는 Droppable, Draggable component를 둘 수 있는 공간이 된다.

#### Droppable

Item을 드랍을 할 수 있는 공간이고 Draggable Item이다.

droppableId라는 prop이 필요하다. = drop이 가능한 판대기 ID
children도 필요하다.
