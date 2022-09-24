import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import "./App.css";

const App = () => {

    const click = () =>{
        console.log("lol");
    }

    const random = () =>{
        console.log(Math.random());
    }

    const sum = () =>{
        console.log(1232 + 324);
    }

    return (
        <>
            <Card mouseclick={click} title="" text="Sit aliquip aliqua Lorem sunt minim est magna. Laboris elit aliqua minim nulla eiusmod officia in minim laborum sit. Sit quis dolore aute magna esse anim non enim exercitation eu et cupidatat. Commodo nisi ea incididunt sunt amet officia ex amet exercitation quis." />
            <Card mouseclick={random} title="Second card" text="" />
            <Card mouseclick={sum} title="Third card" text="Sit aliquip aliqua Lorem sunt minim est magna. Laboris elit aliqua minim nulla eiusmod officia in minim laborum sit. Sit quis dolore aute magna esse anim non enim exercitation eu et cupidatat. Commodo nisi ea incididunt sunt amet officia ex amet exercitation quis." />
        </>
    );
}

export default App;