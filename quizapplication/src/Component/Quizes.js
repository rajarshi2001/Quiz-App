import React, { useState, } from 'react'
import Answer from './Answer';
import Score from './Score';
const Quizes = ({ question }) => {


    const [show, setShow] = useState(false)
    const [answer, setAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [check, setCheck] = useState([{
        right: "",
        prev: "",
    }])
    const [count, setCount] = useState([])

    const checkAns = (right_ans, op) => {
        setCount([...count, right_ans])
        var findEle = check.find(currEle => currEle.right === right_ans)
        if (findEle === undefined) {
            console.log(findEle)
            if (right_ans === op) {
                setScore(score + 10)
                setCheck([...check, { right: right_ans, prev: op }])
            }
            else if (right_ans !== op) {
                setScore(score)
                setCheck([...check, { right: right_ans, prev: op }])
            }
        }
        else {
            if (right_ans !== op) {
                if (findEle.right === findEle.prev) {
                    setScore(score - 10)
                    let ind = check.indexOf(findEle)
                    check.splice(ind, 1, {right: right_ans, prev: op})
                }
                else {
                    setScore(score)
                }
            }
            else if (right_ans === op) {
                if (findEle.right === findEle.prev) {
                    setScore(score)
                }
                else {
                    console.log(check)
                    setScore(score + 10)
                    let ind = check.indexOf(findEle)
                    check.splice(ind, 1, {right: right_ans, prev: op})
                    console.log(check)
                }
            }
        }
    }
    const fetchScore = (e) => {
        e.preventDefault()
        let setCount = new Set(count)
        console.log(setCount.size)
        if (setCount.size == question.length) {
            console.log(score)
            setShow(true)
        }
        else {
            setShow(false)
            setScore(0)
            alert("Start from beginning")
        }
    }

    const refresh = () => {
        setShow(false)
        setScore(0)
        setCount([])
        setCheck([])
    }
    return (
        <>
            {
                show ? <Score score={score} len={question.length} refresh={refresh} /> : <>
                    <div className="container my-3">
                        <h1 className="alert alert-danger"> <i> All the best for the quiz</i></h1>
                        <div className="row my-3">
                            <div className="col-sm-10 offset-1 shadow p-3">
                                <form action="" onSubmit={fetchScore}>
                                    {
                                        question.map((currEle, index) => {
                                            return (
                                                <Answer title={currEle.title} ind={index} ans_right={currEle.answer_right} ans_options={currEle.ans} checkAns={checkAns} />
                                            )
                                        })
                                    }
                                    <div className="text-center">
                                        <button className="btn btn-success mx-auto px-5">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>

            }


        </>
    )
};

export default Quizes