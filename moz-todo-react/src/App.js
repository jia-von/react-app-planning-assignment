//The styles in this App.js is copied from (MDN, 2020b), and modified for this assignment.
import React from 'react';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="todoapp stack-large">
      <h1>Parsley's To-Do List
      </h1>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add Task
        </button>
      </form>
      <h2 id="list-heading">
       Tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <ToDo name="Eat" completed={true}/>
        <ToDo name="Sleep" completed={true}/>
        <ToDo name="Watch birds" completed={false}/>
        <ToDo name="Use the litter box" completed={false}/>
      </ul>
    </div>
  );
}

export default App;
