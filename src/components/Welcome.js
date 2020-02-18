import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Panel from "@material-ui/core/Paper"

function Welcome() {
  const { survey, nextStep } = useContext(AppContext);

  return (
    <React.Fragment>
      <Paper className="paper">
          <Typography variant="h4">
            Welcome: {survey.Header.Name}
          </Typography>
      </Paper>
      <Paper className="paper">
          <Button
            variant="contained"
            color="primary"
            onClick={e => nextStep(e)}
          >
            Start
          </Button>
      </Paper>
    </React.Fragment>
  );
}

export default Welcome;
