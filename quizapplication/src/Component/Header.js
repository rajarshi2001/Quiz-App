import React,{useState, useContext} from 'react'
import { context } from '../Context/QuizProvider';
const Header = ()=>{
    const [quiz, setQuiz] = useState("")

    const { getQuiz } = useContext(context)

    const setValue = (e)=>{
        setQuiz(e.target.value)
    }

    const sendChoice = (e)=>{
        e.preventDefault()
        getQuiz(quiz)
        setQuiz("")
    }

    return(
        <>
            <div className="jumbotron">
            <h1 className="display-1 text-center">Quiz Application</h1>
                <div class="input-group w-50 mx-auto">

                    <form onSubmit={sendChoice} className="mx-auto w-50 my-2">
                    <select className="form-control" value={quiz} onChange={setValue} > 
                        <option value="Choose Quiz"> Choose Quiz </option>
                        <option value="Web Development">Web Development</option>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark my-3 px-5">Start</button>
                    </div>
                   
                    </form>
                </div>
            </div>
        </>
    )
};

export default Header