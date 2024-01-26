import React, { useState} from 'react';
import './App.css';
import Button from './Button';
import TodoList  from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Typescript To do</h1>
          <TodoList />
    </div>
  );
}

export default App;
