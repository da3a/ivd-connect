import React from "react";
import logo from "./logo.svg";

import "./scss/app.scss";

import { AppProvider } from "./AppContext";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Grid from "@material-ui/core/Grid";

import Survey from "./components/Survey";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(",")
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppProvider>
        <Header />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "70vh" }}
        >
          <Grid item md={6}>
          <Survey />
          </Grid>
        </Grid>
        <Footer />
      </AppProvider>
    </MuiThemeProvider>
  );
}

export default App;
