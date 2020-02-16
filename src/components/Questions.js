import React, { useContext } from "react"
import { AppContext } from "../AppContext";

import QuestionEdit from "./QuestionEdit"

function Questions({ start }) {

    const { questions, nextStep, prevStep } = useContext(AppContext);

    console.log(` start: ${start}`)

    return (
        <div>
            {
                // questions.map(
                //     (question => (<Question question={question} />))
                // )
                questions.filter(question => (question.Id >= parseInt(start) && question.Id < (parseInt(start) + 5))
                ).map(
                    question => (<QuestionEdit question={question} />)
                )
            }
            <div className="row">
                <div className="col">
                    Questions {start} to {start + 5}
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button className="btn-primary" onClick={(e) => prevStep(e)}>Previous</button>
                    &nbsp;
                    <button className="btn-primary" onClick={(e) => nextStep(e)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Questions