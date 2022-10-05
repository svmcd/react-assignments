import "./app.css";
import Todo from "../Components/Todo/todo"

const App = () => {
    return (
        <>
            <div className="wrap">
                <div className="logo_container">
                    <h1 className="logo" >Spotify</h1>
                    <div className="logo_subtitle" >Lite</div>
                </div>
                <div className="container" >
                    <Todo genre="Main playlist"/>
                    <Todo genre="Gym"/>
                    <Todo genre="Studying"/>
                    <Todo genre="Japanese"/>
                    <Todo genre="Lofi"/>
                    <Todo genre="Oldschool"/>
                </div>
            </div>
        </>
    )
}

export default App;