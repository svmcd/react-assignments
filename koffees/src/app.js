import Navigation from "./components/navigation/navigation";
import Header from "./components/header/header"
import Section from "./components/section/section"
import Card from "./components/card/card"
import "./App.css"

const App = () =>{
    return(
        <>
            <Navigation />
            <Header Title="Koffees" 
            subTitle="you want some caffeine?" 
            buttonText="Order now"
            />
            <Section Title="The best Coffee on the market">
                <Card text="coffee unboxing nummer 1" image="coffee.jpg"/>
                <Card text="coffee unboxing nummer 2" image="coffee2.jpg"/>
                <Card text="coffee unboxing nummer 3" image="coffee3.jpg"/>
                <Card text="coffee unboxing nummer 4" image="coffee3.jpg"/>
                <Card text="coffee unboxing nummer 5" image="coffee2.jpg"/>
                <Card text="coffee unboxing nummer 6" image="coffee.jpg"/>
            </Section>

        </> 
    );
}

export default App;