import React, { useContext, useState } from "react"

function QuestionEdit({ question, onUpdateQuestion }) {

    const [value, setValue] = useState(question.Response)

    function onSubmit(e) {
        e.preventDefault()
        console.log(`update the answer....`)
        onUpdateQuestion(question.Id, value)
    }

    function onChange(e) {
        
        setValue(e.target.value)
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="row m-4">
                <div className="col">
                    <span>{question.Id}: {question.Text}</span>
                </div>
            </div>
            <div className="row m-2">
                <input
                    type="range"
                    className="custom-range"
                    style={{ height: "100%" }}
                    value={value}
                    onChange={(e) => onChange(e)}
                />{value}
            </div>
            <div className="row">
                <div className="col-2">
                    <button className="btn-primary">Update</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>{question.Comment}</span>
                </div>
            </div>
        </form>
    )
}

export default QuestionEdit