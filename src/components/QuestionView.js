import React, { useContext, useState } from "react"

import Typography from "@material-ui/core/Typography";



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
                    <Typography variant="body1" gutterBottom>{question.id}: {question.text}</Typography>
                </div>
                <div className="col">
                    <Typography variant="body1" gutterBottom>Response: {question.response}</Typography>
                </div>
            </div>
        </React.Fragment>

    )
}

export default QuestionEdit