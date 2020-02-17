import React, { useContext, useState } from "react"

function QuestionEdit({ question }) {

    const [value, setValue] = useState(50)

    function onSubmit(e) {
        e.preventDefault()
        console(`update the answer....`)
    }

    function onChange(e) {
        setValue(e.target.value)
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <span>{question.Id}: {question.Text}</span>
                </div>
                <div className="col">
                    <span>Response: {question.Response}</span>
                </div>
            </div>
        </React.Fragment>

    )
}

export default QuestionEdit