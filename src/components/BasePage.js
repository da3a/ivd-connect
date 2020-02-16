import React, { useContext } from "react"

import { AppContext } from "../AppContext"

import locales from ".././locales";

import Survey from "./Survey"

function BasePage() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col bg-dark text-white text-center">A questionnaire app</div>
            </div>
            <Survey />
        </div>
    )
}

export default BasePage