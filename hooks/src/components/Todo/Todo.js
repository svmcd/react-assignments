import Item from "../Item/Item";
import "./Todo.css";

const Todo = (props) => {

    let toBeRenderedItems = props.items.map(item => {
        return <Item name={item.name} done={item.done}/>
    })

    return (
        <article className="todo">
            <header class="todo__header">
                <h1 class="todo__heading">{props.title}</h1>
            </header>
            <ul className="todo__list">
                {toBeRenderedItems}
             </ul>
        </article>
    );
}

export default Todo;