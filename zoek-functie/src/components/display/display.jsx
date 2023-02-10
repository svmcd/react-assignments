import { useSelector } from "react-redux";
import "./display.css"

const Display = () =>{

    const filteredGames = useSelector(state => {return state});

    const titlesToBeRendered = filteredGames.map(game => {
        return <div key={game.id}>{game.title.toUpperCase()}</div>
    })

    return(
        <>
            <div className="results">
                <h1 className="results__title">Results:</h1>
                <div className="results__games">
                    {titlesToBeRendered}
                </div>
            </div>
        </>
    )
}

export default Display;