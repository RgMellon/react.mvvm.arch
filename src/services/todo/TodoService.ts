import { ITodoService } from "./ITodoService";

const todos: string[] = [];

export class TodoService implements ITodoService {
  create(text: string) {
    todos.push(text);
  }

  list() {
    return Promise.resolve(todos);
  }
}
