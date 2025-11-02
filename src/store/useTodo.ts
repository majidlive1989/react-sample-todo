import { create } from "zustand";

type Todo = {
  todo: {
    id: number;
    title: string;
  }[];
  setTodo: (todo: { id: number; title: string }) => void;
};

export const useTodo = create<Todo>()((set) => ({
  todo: [],
  setTodo: (newTodo) => set((todos) => ({ todo: [...todos.todo, newTodo] })),
}));
