import React from "react";
import Button from "@mui/material/Button";
import { TodoItem } from "./TodoList";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Checkbox from "@mui/material/Checkbox";
import ListItem from '@mui/material/ListItem';

type TodoItemProps = {
  todo: TodoItem;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function TodoListItem({ todo, onToggleComplete, onRemove }: TodoItemProps) {
  return(
    <ListItem key={todo.id}>
      <Checkbox 
      edge='start'
        size='medium'
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
       />
       <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
       {todo.text}
      </span>
      <Button 
        size='small'
        variant='outlined'
        startIcon={<DeleteOutlineIcon />}
        onClick={() => onRemove(todo.id)}>
      {'Delete'}
      </Button>
    </ListItem>
  )

}