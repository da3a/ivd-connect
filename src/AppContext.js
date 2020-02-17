import React, { createContext, useState } from "react"
import locales from "./locales"
import SurveyConfig from "./config/SurveyConfig"

export const AppContext = createContext()

export function AppProvider(props) {
    const [config, setConfig] = useState(
        {
            languageSupport: true,
            loginSupport: true,
            locale: "es",
            questions: locales["es"],
            loggedIn: true
        }
    )

    const [state, setState] = useState(getInitialState())

    const [survey, setSurvey] = useState(SurveyConfig);

    function getInitialState() {
        return {
            step: 1
        };
    }

    function  onUpdateQuestion(id, response)  {
        console.log(`update question id ${id} ${response}`)
        var tempSurvey = survey
        tempSurvey.Questions.filter(question => (question.Id === id)).map(question => question.Response = response)
        setSurvey(prevProducts => (tempSurvey))

    }

    function nextStep() {
        console.log("nextStep...")
        setState(prevState => ({ ...prevState, step: state.step + 1 }));
    }

    function prevStep() {
        setState(prevState => ({ ...prevState, step: state.step - 1 }));
    }

    return (
        <AppContext.Provider value={{ state, survey, onUpdateQuestion, nextStep, prevStep }}>
            {props.children}
        </AppContext.Provider>
    )

}


