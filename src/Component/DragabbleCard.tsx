import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDragabbleCrad {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCrad) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
