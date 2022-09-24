import Item from "../Item/item";
import "./todo.css";

const Todo = () => {

    const tasks = [
        {
            name: "homework",
            done: false,
        },
        {
            name: "go to gym",
            done: false,
        },
        {
            name: "eat noodles",
            done: false,
        },
        {
            name: "drink",
            done: false,
        },
        {
            name: "feed hamster",
            done: false,
        },
        {
            name: "take a nap",
            done: false,
        },
    ];

    let listItems = tasks.map( task => {
        return <Item name={task.name} done={task.done}/>
    });

    return(
        <article className="todo">
            <header>
                <h1>things to do today:</h1>
            </header>
            <ul className="todo_list">
                {listItems}
            </ul>
        </article>
    );
};

export default Todo;