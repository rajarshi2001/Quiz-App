import React from 'react'

const Answer = (props) => {
    return (
        <>
            <h5 className="text-danger "> <b><i>{props.ind + 1} : {props.title}?</i></b></h5>
            {
                props.ans_options.map((currItem) => {
                    return (
                        <>
                            <input type="radio"  name={props.title} 
                             onClick={()=>{props.checkAns(props.ans_right, currItem.options)}} />
                            <label htmlfor={props.title} className="p-2"><i>{currItem.options}</i></label><br />

                        </>
                    )
                })
            }
        </>
    )
};
export default Answer;