"use client"
import { TodoService } from "@/services/todo/TodoService";
import { useTodoModel } from "./todo.model";
import TodoView from "./todo.view";


export default function Todo() {
    const todoService = new TodoService();
    const methoods = useTodoModel(todoService);

    return <TodoView {...methoods}/>
  }
  