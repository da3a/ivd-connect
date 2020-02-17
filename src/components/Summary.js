import React, { useContext } from "react"
import { AppContext } from "../AppContext";
import QuestionView from "./QuestionView.js"

function Summary() {

    const { survey, nextStep, prevStep } = useContext(AppContext);

    return (
        <div>
            {
                // questions.map(
                //     (question => (<Question question={question} />))
                // )
                survey.Questions.map(
                    question => (<QuestionView question={question} />)
                )
            }
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

export default Summary