import Activity from "../activity/activity"
import Input from "../input/input"
import "./iTrell.scss"

const Itrell = ({id, onLabelClicked, itrell}) => {

    let listItemsToBeRendered = itrell.activities.map(object => {
        return (
            <Activity key={object.id} activity={object} onLabelClicked={onLabelClicked}/>
        )
    });
 
    return (
        <section className="itrell">
            <header className="itrell__header">
                <h1 className="itrell__heading">{itrell.title || "Placeholder"}</h1>
                <div className="itrell__header-wrapper">
                    <div className="itrell__number">{itrell.activities.length || "0"}</div>
                    <button className="itrell__edit">⋯</button>
                </div>
            </header>
            <ul className="itrell__activities">
                {listItemsToBeRendered}
            </ul>
            <Input id={id}/>
        </section>
    );
}

export default Itrell;