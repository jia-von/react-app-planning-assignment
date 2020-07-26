import React from "react";

class ToDo extends React.Component {
    constructor(props)
    {
        {
            super(props)
                this.state = {
                tasks: [{name: "Eat"}, {name: "Sleep"}, {name: "Watch birds"}, {name: "Use the litter box"}]
                };
        }
    }
    render()
    {
        return(
            <li className="todo stack-small">
                <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={this.props.completed} />
                    <label className="todo-label" htmlFor="todo-0">
                        {this.props.name}
                    </label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn__danger">
                        Delete <span className="visually-hidden">Eat</span>
                    </button>
                </div>
            </li>
        );
    }
}
export default ToDo;
