import React, { useContext, useEffect, useState } from 'react'
import { context } from '../Context/QuizProvider';
import Quizes from './Quizes';
import Display from './Display';


const Quiz = () => {
    const { state } = useContext(context)
    const [question, setQuestion] = useState([])
    const [wrong, setWrong] = useState("")


    useEffect(() => {
        callApi(state)
    }, [state])

    const callApi = async (state) => {
        if (state !== "") {
            await fetch(`http://127.0.0.1:8000/quizApi/${state}/`).then(res => res.json())
                .then((res) => {
                    console.log(res)
                    setQuestion(res)
                })
        }

    }
    return (
        <>
            {
                state !== "" ? <Quizes question={question} /> : <Display />
            }
        </>
    )

};
export default Quiz;