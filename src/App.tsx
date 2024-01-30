import React, { useState} from 'react';
import './App.css';
import Button from './Button';
import TodoList  from './TodoList';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography variant='h1'>Typescript To do</Typography>
          <TodoList />
    </div>
  );
}

export default App;
