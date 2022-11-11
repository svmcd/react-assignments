import "./outro.css"
import {Bar} from "react-chartjs-2" ;
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const Outro = (props) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    let questions = [];
    let ratings = [];
    
    props.questionsAndAnswers.map(question => {
        questions.push("Question #" + question.number)
        ratings.push(question.rating);
    });

    let data = {
        labels: questions,
        datasets: [
            {
                label: 'My score',
                data: ratings
            },
        ]
    };

    return (
        <article className="outro">
            <h1 className="outro__title">Your results</h1>
            <Bar data={data}></Bar>
        </article>
    )
}

export default Outro;