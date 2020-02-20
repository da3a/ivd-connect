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
                    <Typography variant="h6">{question.Id}: {question.Text}</Typography>
                </div>
                <div className="col">
                    <Typography variant="h6">Response: {question.Response}</Typography>
                </div>
            </div>
        </React.Fragment>

    )
}

export default QuestionEdit