import { useCallback, useState } from "react"
import QUESTION from '../questions.js'
import logos from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    //    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAns, setUserAns] = useState([]);

    const activeQuestionIndex = userAns.length;
  
    const quizCompleted = activeQuestionIndex === QUESTION.length;


   const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAns){
      setUserAns((prevAns) => {
         return[...prevAns, selectedAns]
      });
    }, []);

    const handleskipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizCompleted){
        return <div id="summary">
        <img src= {logos} alt="Success" />
        <h2>Comleted</h2></div>
    }
      const shuffleAns = [...QUESTION[activeQuestionIndex].answers];
    shuffleAns.sort(() => Math.random() -0.5);


    return(
     <div id= "quiz">  
     <div id="question">
        <QuestionTimer
        key = {activeQuestionIndex}
         timeout={10000}  onTimeOut={handleskipAnswer}/>
      <h2>{QUESTION[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffleAns.map((answer) => (
            <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
        ))}
      </ul>
    </div>
    </div> 
    );
}