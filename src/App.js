import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import Register from './Register';

function App() {

  return (
    <div>   
      <Routes>
        <Route path="/todos" element={<TodoList />} />
        <Route path="/" element={<Register />} />
      </Routes>
    
    </div>
  );
}

export default App;
