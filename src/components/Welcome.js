import React, { useContext } from "react"

import { AppContext } from "../AppContext";

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

function Welcome() {
    const { nextStep } = useContext(AppContext);

    return (
        <React.Fragment>
            <Grid item xs>
                <Paper className="paper">
                <Typography variant="headline">Welcome to this simple questionnaire app... Please click start to begin</Typography>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className="paper">
                    <Button color="primary" onClick={(e) => nextStep(e)}>Start</Button>
                </Paper>
            </Grid>

        </React.Fragment>
    )
}

export default Welcome