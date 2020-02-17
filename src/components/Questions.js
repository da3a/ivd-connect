import React, { useContext } from "react"
import { AppContext } from "../AppContext";

import Button from '@material-ui/core/Button';

import QuestionEdit from "./QuestionEdit"

function Questions({ start }) {

    const { survey, onUpdateQuestion, nextStep, prevStep } = useContext(AppContext);

    console.log(` start: ${start}`)

    return (
        <div>
            {
                survey.Questions.filter(question => (question.Id >= parseInt(start) && question.Id < (parseInt(start) + 5))
                ).map(
                    question => (<QuestionEdit key={question.Id} question={question} onUpdateQuestion={onUpdateQuestion} />)
                )
            }
            <div className="row m-2">
                <div className="col">
                    Questions {parseInt(start)} to {parseInt(start) + 4}
                </div>
            </div>

            <div className="row m-2">
                <div className="col">
                    <Button className="btn-primary" onClick={(e) => prevStep(e)}>Previous</Button>
                    &nbsp;
                    <Button className="btn-primary" onClick={(e) => nextStep(e)}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default Questions