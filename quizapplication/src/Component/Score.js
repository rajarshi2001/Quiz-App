import React from 'react'

const Score = ({score, refresh, len})=>{
    return(
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-sm-10 offset-1">
                        <h1 className="text-center"><h1>Your score is <b className="text-danger">{score}</b> out of <b className="text-danger">{len*10}</b> </h1></h1>
                        <div className="text-center">
                            <button onClick={()=>{refresh()}} className="btn btn-outline-success">Refresh</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Score;