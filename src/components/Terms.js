import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

function Terms() {
  const { survey, handleTerms, nextStep, prevStep } = useContext(AppContext);

  const classes = useStyles();
  return (
    <div className={classes.bigContainer}>
      <Paper className={classes.paper}>
        <div style={{ marginBottom: 24 }}>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold" }}
            gutterBottom
          >
            Terms & Conditions
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please read through and accept the terms & conditions
          </Typography>
        </div>
        <div
          style={{
            height: 330,
            padding: 16,
            border: "2px solid #ccc",
            borderRadius: "3px",
            overflowY: "scroll"
          }}
        >
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold" }}
            gutterBottom
          >
            1. Your agreement
          </Typography>
          <Typography variant="body1" gutterBottom>
            By using this Site, you agree to be bound by, and to comply with,
            these Terms and Conditions. If you do not agree to these Terms and
            Conditions, please do not use this site. PLEASE NOTE: We reserve the
            right, at our sole discretion, to change, modify or otherwise alter
            these Terms and Conditions at any time. Unless otherwise indicated,
            amendments will become effective immediately. Please review these
            Terms and Conditions periodically. Your continued use of the Site
            following the posting of changes and/or modifications will
            constitute your acceptance of the revised Terms and Conditions and
            the reasonableness of these standards for notice of changes. For
            your information, this page was last updated as of the date at the
            top of these terms and conditions.
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold" }}
            gutterBottom
          >
            2. Privacy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please review our Privacy Policy, which also governs your visit to
            this Site, to understand our practices. By using this Site, you
            agree to be bound by, and to comply with, these Terms and
            Conditions. If you do not agree to these Terms and Conditions,
            please do not use this site. PLEASE NOTE: We reserve the right, at
            our sole discretion, to change, modify or otherwise alter these
            Terms and Conditions at any time. Unless otherwise indicated,
            amendments will become effective immediately. Please review these
            Terms and Conditions periodically. Your continued use of the Site
            following the posting of changes and/or modifications will
            constitute your acceptance of the revised Terms and Conditions and
            the reasonableness of these standards for notice of changes. For
            your information, this page was last updated as of the date at the
            top of these terms and conditions.
          </Typography>
        </div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                //checked={survey.Header.termsChecked}
                onChange={handleTerms}
                value={survey.Header.termsChecked}
              />
            }
            label="I have read and understood the terms & conditions"
          />
        </FormGroup>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={e => prevStep(e)}
          >
            Previous
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            onClick={e => nextStep(e)}
          >
            Next
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Terms;
