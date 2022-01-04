import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

const localStorageToDos = localStorage.getItem("toDo");
const parsedToDos = JSON.parse(localStorageToDos as any);
export const toDostate = atom<IToDoState>({
  key: "toDo",
  default: parsedToDos
    ? parsedToDos
    : {
        "To Do": [],
        Doing: [],
        Done: [],
      },
});
