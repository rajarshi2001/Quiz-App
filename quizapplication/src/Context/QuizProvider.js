import React, { createContext, useEffect, useState, useReducer } from 'react'

export const context = createContext()

const QuizProvider = (props) => {

    const [start, setStart] = useState([])


    const reducer = (state, action) =>{
        if(action.type === "GET_QUIZ"){
            state = action.payload
            return state
        }
    }



    const initialState = ""
    const [state, dispatch] = useReducer(reducer, initialState)

    const getQuiz = (quiz) => {
        dispatch(
            
                {
                    type: "GET_QUIZ",
                    payload: quiz
                }
            
        )
    }

    return (
        <context.Provider value={{
            state: state,
            getQuiz,
        }}>
            {props.children}
        </context.Provider>
    )
};

export default QuizProvider;