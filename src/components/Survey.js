import React, { useContext } from "react";

import Welcome from "./Welcome";
import Questions from "./Questions";
import Summary from "./Summary";
import Terms from "./Terms"
import Goodbye from "./Goodbye";

import { AppContext } from "../AppContext";

function Survey() {
  const { state } = useContext(AppContext);

  switch (state.step) {
    case 1:
      return <Welcome />;
    case 2:
      return <Questions start="1" />;
    case 3:
      return <Questions start="5" />;
    case 4:
      return <Summary />;
    case 5:
      return <Terms />;
    case 6:
      return <Goodbye />;
  }
}

export default Survey;
