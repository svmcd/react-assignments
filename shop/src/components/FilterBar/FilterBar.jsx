import "./FilterBar.css"
import { useEffect, useState } from "react";

const FilterBar = ({onFilter}) => {

    const [labels, setLabels] = useState([]);

    useEffect(() => {
        let ToBeRenderedLabels = [
            {
                name: "icetea",
                checked: false,
            },
            {
                name: "water",
                checked: false,
            },
            {
                name: "chicken",
                checked: false,
            }
        ]

        setLabels(ToBeRenderedLabels)
    },[])

    const ToBeRenderedLabels = labels.map(label => {
        let input = <input onChange={() => filterItem(label.name)} type="checkbox" id={label.name} className="filterBar__checkbox"/>

        if(label.checked){
            input = <input checked onChange={() => filterItem(label.name)} type="checkbox" id={label.name} className="filterBar__checkbox"/>
        }

        return (
            <div key={label.name} className="filterBar__inputWrapper">
                {input}    
                <label htmlFor={label.name}>{label.name}</label> 
            </div>
        )
    })

    const filterItem = (filter) => {
        const newState = labels.map(label => {
            if(label.name !== filter){
                label.checked = false;
            }
            if(label.name === filter){
                label.checked = true;
            }
            return label
        })
        setLabels(newState);
        onFilter(filter);
    }

    return(
        <section className="filterBar">
            <div className="filterBar__wrapper">
                {ToBeRenderedLabels}
            </div>
        </section>
    )
}

export default FilterBar;