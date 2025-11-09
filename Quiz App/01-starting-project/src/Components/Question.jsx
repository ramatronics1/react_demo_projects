import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";


export default function Question({ questionText, answers, onSelectedAns, selectedAns, answerState, onSkipAnswer }) {
    return(
        <div id="question">
            <QuestionTimer
                timeout={10000} onTimeOut={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answers answers={answers} selectedAns={selectedAns} answerState={answerState} onSelect={onSelectedAns} />
        </div>
    )
}