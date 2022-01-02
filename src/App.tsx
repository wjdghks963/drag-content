import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDostate } from "./atoms";
import styled from "styled-components";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Borads = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDostate);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 같은 보드에서 움직인다.
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        // 선택한 index부분에서 한개의 원소를 없애고
        boardCopy.splice(source.index, 1);
        // 선택한 index가 도착한 부분에 아무것도 자르지 않고 선택한 ID를 넣어준다.
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      // board를 건너서 바꿈
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Borads>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Borads>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
