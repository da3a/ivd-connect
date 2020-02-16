import React, { useContext } from "react"

import { AppContext } from "../AppContext";

function Welcome() {
    const { nextStep } = useContext(AppContext);

    return (
        <div>
            <div className="row">
                <div className="col">
                    Welcome to this simple questionnaire app... Please click start to begin
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button className="btn-primary" onClick={(e) => nextStep(e)}>Start</button>
                </div>
            </div>

        </div>
    )
}

export default Welcome