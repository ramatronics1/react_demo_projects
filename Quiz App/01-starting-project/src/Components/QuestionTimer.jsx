import {useEffect, useState } from "react";


export default function QuestionTimer({ timeout, onTimeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
         const timer = setTimeout(onTimeOut, timeout);

          return () => clearTimeout(timer);
    },[timeout, onTimeOut]);

    useEffect(() => {  
        const interval =  setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 100);

        return () => clearInterval(interval);
    }, 100 );
},[])


    return (
        <progress id="question-time" max={timeout} value={remainingTime}/>
    )
}