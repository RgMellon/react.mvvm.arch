"use client";
import { ITodoService } from "@/services/todo/ITodoService";
import { useEffect, useState } from "react";

export function useTodoModel(service: ITodoService) {
  const [todos, setTodos] = useState<string[]>([""]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todoList = await service.list();

      setTodos(todoList);
    };

    fetchTodos();
  }, [service]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTodo = formData.get("todo")?.toString() || "";

    setTodos((old) => [...old, newTodo]);

    service.create(newTodo);
  }

  return {
    todos,
    handleSubmit,
  };
}
