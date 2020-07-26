import React from "react";

class Form extends React.Component {
    function handleSubmit(e) //to create a button function
    {
        e.preventDegault();
        alert('Hello, world!')
    }
    render ()
    {
        return (
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
                Add Task
              </button>
            </form>
          );
        }
        
    }
export default Form;