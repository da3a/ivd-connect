import React, { useContext } from "react"

import { AppContext } from "../AppContext"

import locales from ".././locales";

import Survey from "./Survey"

import Grid from '@material-ui/core/Grid';

import Header from "./Header"
import Footer from "./Footer"

function BasePage() {

    return (
            <React.Fragment>
            <Header/>
            <Grid container spacing="0" direction="column" justify="center">
            <Survey />
            </Grid>
            <Footer/>
            </React.Fragment>
    )
}

export default BasePage