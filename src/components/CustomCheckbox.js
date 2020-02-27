import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CustomCheckbox({question, onChange}) {
  const [state, setState] = React.useState(question.options);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    console.log(`CustomCheckbox handleChange: ${JSON.stringify(state)}`)
    onChange(event, state)
  };

  return (
Object.keys(question.options).map(
option => (
<FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange(option)} value={option} />
        }
        label={option}
      />
    </FormGroup>

)
)
  );
}
