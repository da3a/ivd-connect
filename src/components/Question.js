import React, { useContext } from "react"

function Question({ question }) {
    return (
        <div className="row">
            <div className="col">
                {question.Id}: A question ....
            </div>
        </div>
    )
}

export default Question