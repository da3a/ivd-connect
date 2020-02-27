import React from "react"
import TextField from '@material-ui/core/TextField';

function CustomText({value, onChange})
{
    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined"  onChange={onChange} value={value}/>
    )
}

export default CustomText