import { atom } from "nanostores";
import type { Todo } from "../types";

export const isTodoCompleted = atom(false);
export const currentTodo = atom<Todo | null>(null);