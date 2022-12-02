import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";
import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";
import "./App.css";

const App = () => {

    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

    const onLast = (newQuestionsAndAnswers) => {
        setQuestionsAndAnswers(newQuestionsAndAnswers);
    }

    return (
        <Routes>
            <Route path="/vragen/:number" element={<QuestionsRouter onLast={onLast} />} />
            <Route path="/outro" element={<Outro questionsAndAnswers={questionsAndAnswers}/>} />
            <Route path="/" element={<Intro/>}/>
        </Routes>
    );

}

export default App;