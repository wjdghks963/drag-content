import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDostate = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["c", "d", "e"],
    Doing: ["a", "b"],
    Done: ["f"],
  },
});
