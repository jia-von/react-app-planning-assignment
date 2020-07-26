//The styles in this App.js is copied from (MDN, 2020b), and modified for this assignment.
import React from 'react';
import Index from './index';
import ToDo from './components/ToDo';


function App(props) {
  const taskList = props.tasks.map(task => <ToDo id={task.id} name={task.name} completed={task.completed} key={task.id} />);
  return (
    <div className="todoapp stack-large">
      <h1>Parsley's To-Do List
      </h1>
      <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
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
        {taskList}
      </ul>
    </div>
  );
}

export default App;
