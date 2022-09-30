import React from "react";
import Item from "../Item/item";
import Input from "../input/input"
import tasksObject from "../../data/tasks"
import "./todo.css";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    // runt na het aanmaken en tekenen van een component
    componentDidMount() {
        this.setState({
            tasks: tasksObject.tasks,
        });
    }

    // runt na het updaten van de state
    componentDidUpdate() {

    }

    inputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [
            {
                name: inputFromInputComponent,
                done: false,
                id: this.state.tasks.length + 1,
            }
        ]
        let mergedArray =  this.state.tasks.concat(toBeAdded);
        this.setState({
            tasks: mergedArray,
        });
    }

    render() {

        let items = this.state.tasks.map(task => {
            return <Item name={task.name} key={task.id}> </Item>
        });

        return (
            <article className="todo">
                <header>
                    <h1>things to do today:</h1>
                </header>
                <ul className="todo_list">
                    {items}
                </ul>
                <Input inputPressedEnter={this.inputPressedEnter}/>
            </article>
        );
    };
};

export default Todo;