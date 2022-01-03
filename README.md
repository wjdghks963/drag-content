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

```javascript
{
  (magic, snapshot) => (
    <Area
      isDraggingOver={snapshot.isDraggingOver}
      isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
      ref={magic.innerRef}
      {...magic.droppableProps}
    >
      {toDos.map((toDo, index) => (
        <DragabbleCard key={toDo} toDo={toDo} index={index} />
      ))}
      {magic.placeholder}
    </Area>
  );
}
```

4. isDraggingOver:boolean > 현재 선택한 item이 특정 board에 드래깅 되고 있는지 확인

5. draggingFromThisWith: board에서 벗어나 드래깅되고 있는 item

#### draggble ref

reference는 react component를 통해 HTML요소를 가져올 수 있도록한다.

---

## react memo

[velog react memo](https://velog.io/@wjdghks963/React.memo)

react memo는 react한테 props가 변하지 않는다면 해당 component를 렌더링하지 말라고 하는 역할

```
export default React.memo(DragabbleCard);
```

---

# JS 문법

Object.keys(obj)는 obj의 key값들을 *배열*로 반환한다.
따라서 아래의 코드는 toDos의 키값에 map을 사용한 뒤 Board component를 렌더링한다.

Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.

```javascript
{
  Object.keys(toDos).map((boardId) => (
    <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
  ));
}
```
