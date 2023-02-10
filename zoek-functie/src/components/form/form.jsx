import { useState } from "react";
import { useDispatch } from "react-redux"
import { filterGamesByTitle, filterGamesByPlatform, filterGamesByType } from "../../helpers/filterGames"
import { games } from "../../data/games";

const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle,
            placeholder: "Fortnite..",
        },
        {
            id: "platform",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform,
            placeholder: "PS4..",
        },
        {
            id: "type",
            value: "",
            label: "Type",
            filter: filterGamesByType,
            placeholder: "Action..",
        },
    ]);

    let dispatch = useDispatch()

    const onInputChanged = (e) => {
        let copy = [...inputs];
        copy.map(input => {
            if(input.id === e.target.id){
                input.value = e.target.value;
            }
        });
        setInputs(copy);
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return <div className="form__inputContainer" key={objectFromStateArray.id}>
            <label htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
            <input onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} placeholder={objectFromStateArray.placeholder}/>
        </div>
    })
    
    const submit = () => {
        let result = games;
        inputs.forEach( input => {
            result = input.filter(input.value, result);
        });
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        })
    }
    
    return(
        <form onSubmit={(event) => event.preventDefault()}>
            {inputsToBeRendered}
            <button onClick={submit}>Search</button>
        </form>
    )
}

export default Form;