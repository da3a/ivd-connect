import React, { useContext } from "react"
import { AppContext } from "../AppContext";
import QuestionView from "./QuestionView.js"

import Button from '@material-ui/core/Button';

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
                    <Button  variant="contained"
            color="primary" onClick={(e) => prevStep(e)}>Previous</Button>
                    &nbsp;
                <Button  variant="contained"
            color="primary" onClick={(e) => nextStep(e)}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default Summary