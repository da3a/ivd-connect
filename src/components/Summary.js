import React, { useContext } from "react"
import { AppContext } from "../AppContext";
import QuestionView from "./QuestionView.js"

import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

function Summary() {

    const { survey, nextStep, prevStep } = useContext(AppContext);

    return (
<div >
                <div>
                    <Typography variant="subtitle1"
            style={{ fontWeight: "bold" }}
            gutterBottom>Here's a summary of your responses </Typography>
                </div>
            
            {
                survey.Questions.map(
                    (question, index) => (<QuestionView key={index} question={question} />)
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