import React, { useState } from "react";
import TodoItem from "./TodoListItem";
import Button from '@mui/material/Button'
import { TextField } from "@mui/material";
import List from '@mui/material/List';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoList(){
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo !== ''){
      const newId = crypto.randomUUID();
      const newTodoItem: TodoItem = {
        id: newId, 
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  }

  const removeTodo = (id: string) => {
    const updatedTodos: TodoItem[] = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  return(
    <div>
      <TextField
        helperText='Describe what needs to be done'
        label='Stuff to do'
        type='type'
        size='small'
        variant='outlined'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button 
        variant='contained'
        size='medium'
        onClick={addTodo}>
          Add Todo
      </Button>
        <List>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={toggleComplete}
              onRemove={removeTodo}
            />
            ))}
        </List>
    </div>
  )
};

export{ TodoItem }