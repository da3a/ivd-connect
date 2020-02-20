import React, { useContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Sliders from "./Sliders";

function QuestionEdit({ question, onUpdateQuestion }) {

  const [value, setValue] = useState(question.Response);

  function onChange(e, newValue) {
    console.log(`e.target.value: ${newValue}`);
    setValue(newValue);
  }


  function onSubmit(e) {
    e.preventDefault();
    console.log(`update the answer....`);
    onUpdateQuestion(question.Id, value);
  }

  return (
    <form validated onSubmit={e => onSubmit(e)} style={{marginBottom:"16px"}}>
      <Grid item>
        <Typography variant="h6">
          {question.Id}: {question.Text}
        </Typography>
      </Grid>
      <div>
        <Grid item>
          <Sliders value={value} onChange={onChange}/>
        </Grid>
      </div>
      <Grid item>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Update
        </Button>
      </Grid>
      <Grid item>
        <span>{question.Comment}</span>
      </Grid>
    </form>
  );
}

export default QuestionEdit;
