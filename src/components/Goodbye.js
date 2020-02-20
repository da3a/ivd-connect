import React, { useState } from "react"

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MultilineText from "./MultilineText"

function Goodbye() {
    return (
        <Grid item style={{border:"1px solid black"}}>
                <Typography variant="h6">Thank you Survey has finished...</Typography>
                <MultilineText/>
        </Grid>
    )
}

export default Goodbye