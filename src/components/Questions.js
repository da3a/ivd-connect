import React, { useContext } from "react"
import { AppContext } from "../AppContext";

import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

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
            <div style={{marginTop:"16px"}}>
                <div>
                    <Button variant="contained"
            color="primary" onClick={(e) => prevStep(e)}>Previous</Button>
                    &nbsp;
                    <Button  variant="contained"
            color="primary" onClick={(e) => nextStep(e)}>Next</Button>
                </div>
            </div>
            <div>
                <div>
                    <Typography variant="h6">Questions {parseInt(start)} to {parseInt(start) + 4}</Typography>
                </div>
            </div>

        </div>
    )
}

export default Questions