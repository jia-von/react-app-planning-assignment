import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToDo from './components/ToDo'
import StyleSheet from './index.css'

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: true },
    { id: "todo-2", name: "Watch birds", completed: false },
    { id: "todo-3", name: "Use the litter box", completed: false },
  ];

ReactDOM.render(
    <App tasks = {DATA}/>, 
    document.getElementById('root'));
