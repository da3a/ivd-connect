import React, { useContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 42
  }
});

function QuestionEdit({ question, onUpdateQuestion }) {
  const classes = useStyles();
  const [value, setValue] = useState(question.Response);

  const handleInputChange = event => {
    //setValue(event.target.value === "" ? "" : Number(event.target.value));
    setValue(Number(event.target.value));
  };

//   const handleBlur = () => {
//     if (value < 0) {
//       setValue(0);
//     } else if (value > 100) {
//       setValue(100);
//     }
//   };

  function onSubmit(e) {
    e.preventDefault();
    console.log(`update the answer....`);
    onUpdateQuestion(question.Id, value);
  }

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div>
        <div className="col">
          <Typography variant="h4">
            {question.Id}: {question.Text}
          </Typography>
        </div>
      </div>
      <div className="row m-2">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleInputChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              //onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
        <input
          type="range"
          className="custom-range"
          style={{ height: "100%" }}
        />
        {value}
      </div>
      <div className="row">
        <div className="col-2">
          <Button className="btn-primary">Update</Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>{question.Comment}</span>
        </div>
      </div>
    </form>
  );
}

export default QuestionEdit;
