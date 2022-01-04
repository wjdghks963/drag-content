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
    const { destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 같은 보드에서 움직인다.
      setToDos((allBoards) => {
        // 본 board의 카피값
        const boardCopy = [...allBoards[source.droppableId]];
        // 출발지의 item이 어떤 원소였는지 알려준다.
        const taskObj = boardCopy[source.index];
        // 선택한 index번째 위치에서 한개의 원소를 없애고
        boardCopy.splice(source.index, 1);
        // 선택한 index가 도착한 부분에 아무것도 자르지 않고 선택한 ID를 넣어준다.
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      // board를 건너서 바꿈
      setToDos((allBoards) => {
        // 출발지의 board값들을 카피
        const sourceBoard = [...allBoards[source.droppableId]];
        // 출발지의 item이 어떤 원소였는지 알려준다.
        const taskObj = sourceBoard[source.index];
        // 도착지의 board값들을 카피
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
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
