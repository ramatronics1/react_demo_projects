import Header from "./Components/Header"
import Results from "./Components/Results"
import UserInput from "./Components/UserInput"
import { useState } from "react"

function App() {
const [userInput, setUserInput] = useState({ initialInvestment: 1000, annualInvestment: 1200, expectedReturn: 6, duration: 10 })

 function handleChange(inputIdentifier, newValue) {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                [inputIdentifier]: +newValue
            }
        })
    }
  
    const inputValid =  userInput.duration >=1
  return (
    <>
    <Header />
    <UserInput userInput = {userInput} onChange={handleChange} />
    {!inputValid && <p className="center"> Please Enter Valid Data !!</p>}
    {inputValid &&<Results input={userInput}/>}
    </>
  )
}

export default App
