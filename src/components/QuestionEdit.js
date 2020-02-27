import React, { useContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";

import CustomSlider from "./CustomSlider";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadio from "./CustomRadio";
import CustomText from "./CustomText"

function QuestionEdit({ question, onUpdateQuestion }) {
  //here value is a generic object
  const [value, setValue] = useState({});

  function onChange(e, newValue) {
    console.log(`onChange in QuestionEdit: new Value: ${JSON.stringify(newValue)}`);
    setValue(newValue);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(`update the answer....`);
    onUpdateQuestion(question.id, value);
  }

  function RenderControl() {
    switch (question.type) {
      case "slider":
        return <CustomSlider value={value} onChange={onChange} />;
      case "check":
        return <CustomCheckbox question={question} onChange={onChange} />;
      case "radio":
        return <CustomRadio value={value} onChange={onChange} />;
      case "text":
        return <CustomText value={value} onChange={onChange} />;
      default:
        return <span />;
    }
  }

  return (
    <FormGroup onSubmit={e => onSubmit(e)} style={{ marginBottom: "16px" }}>
      <Grid item>
        <Typography variant="body1" gutterBottom>
          {question.id}: {question.text}
        </Typography>
      </Grid>
      <div>
        <Grid item>
          <RenderControl />
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
    </FormGroup>
  );
}

export default QuestionEdit;
