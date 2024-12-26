"use client";
import { ITodoService } from "@/services/todo/ITodoService";
import { useEffect, useState } from "react";

export function useTodoModel(service: ITodoService) {
  const [todos, setTodos] = useState<string[]>([""]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todoList = await service.list();
      console.log(todoList);
      setTodos(todoList);
    };

    fetchTodos();
  }, [service]);

  function handleSubmit(text: string) {
    setTodos((old) => [...old, text]);

    service.create(text);
  }

  return {
    todos,
    handleSubmit,
  };
}
