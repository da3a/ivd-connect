import React from "react"

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Footer(){

    return (
        <Paper>
        <Tabs
        value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Page One" />
          <Tab label="Page Two" />
          <Tab label="Page Three" />
        </Tabs>
      </Paper>
    )
}

export default Footer