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

export default function CustomCheckbox({ question, onChange }) {

  const classes = useStyles();
  const [state, setState] = React.useState([]);

  console.log(`debugging state: ${JSON.stringify(state)}`)

  const handleChange = name => event => {
    console.log(`name: ${name} event.target.checked: ${event.target.checked}`)
    if (event.target.checked) {
      setState([...state, name])
      console.log(`state has been set to ${state}`)
    }
    else
      setState(state.filter(x => x != name))
    console.log(`state: ${JSON.stringify(state)}`)
    //onChange(name, state)
  };

  console.log(`state: ${JSON.stringify(state)} `)

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <FormGroup>
          {question.options.map((option, index) => <FormControlLabel key={option} control={<Checkbox onChange={handleChange(option)} checked={state[option]} value={option} />} label={option} />)}
        </FormGroup>
      </FormControl>
    </div>
  );
}
