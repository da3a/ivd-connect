import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CustomCheckbox({question, onChange}) {
  const classes = useStyles();
  const [state, setState] = React.useState(question.options);

  const handleChange = name => event => {
    console.log(`event.target.checked: ${event.target.checked}`)
    setState({ ...state, [name]: event.target.checked });
    let tempState = state
    //onChange(event, tempState)
  };

  console.log(`state: ${JSON.stringify(state)}`)

  console.log(`state: ${JSON.stringify(state["No"])}`)
  
  return (
    <div className={classes.root}>
      <FormControl  className={classes.formControl}>
        <FormGroup>
         {Object.keys(question.options).map((option, index) => <FormControlLabel key={index} control={<Checkbox onChange={handleChange(option)} checked={state[option]}/>} label={option}/>)}  
        </FormGroup>
      </FormControl>
    </div>
  );
}
