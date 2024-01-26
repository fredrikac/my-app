import React from "react";
import Button from "./Button";
import { TodoItem } from "./TodoList";

type TodoItemProps = {
  todo: TodoItem;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function TodoListItem({ todo, onToggleComplete, onRemove }: TodoItemProps) {
  return(
    <li key={todo.id}>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <Button onClick={() => onRemove(todo.id)} text={'Remove'} />
    </li>
  )

}