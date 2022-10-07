import FBCard from "../../components/fbCard/fbCard"
import "./FBCardWrapper.css"

function FBCardWrapper (props){
    return (
        <section className="fbCardWrapper">
            <FBCard 
                fbcardName="Heisenberg"
                fbcardType={["chemistry","meth","danger"]}    
                fbcardImage="https://pbs.twimg.com/media/FZWTngSXkAcHpGy.jpg"
                fbcardHP="260"
                updateCounter={props.updateCounter}
            />
            <FBCard 
                fbcardName="Gus Fring"
                fbcardType={["chicken","manipulation","wealthy"]}    
                fbcardImage="https://i.redd.it/fow0p2xb1s691.jpg"
                fbcardHP="220"
                updateCounter={props.updateCounter}
            />
            <FBCard 
                fbcardName="Walter White"
                fbcardType={["chemistry","teacher"]}    
                fbcardImage="https://pbs.twimg.com/media/FZWTngMXoAIYDnw.jpg"
                fbcardHP="60"
                updateCounter={props.updateCounter}
            />
            <FBCard 
                fbcardName="Homelander"
                fbcardType={["compoundV","mommyissues"]}    
                fbcardImage="https://i.pinimg.com/736x/f0/95/d2/f095d24f0b89fb43e62db7a98687194a.jpg"
                fbcardHP="675"
                updateCounter={props.updateCounter}
            />
        </section>
    )
}

export default FBCardWrapper;