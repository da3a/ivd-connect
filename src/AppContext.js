import React, { createContext, useState } from "react"
import locales from "./locales"
import QuestionsConfig from "./config/QuestionsConfig"

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

    const [questions, setQuestions] = useState(QuestionsConfig);

    console.log(`QuestionsConfig: ${QuestionsConfig}`)

    function getInitialState() {
        return {
            step: 1
        };
    }

    function nextStep() {
        console.log("nextStep...")
        setState(prevState => ({ ...prevState, step: state.step + 1 }));
    }

    function prevStep() {
        setState(prevState => ({ ...prevState, step: state.step - 1 }));
    }


    return (
        <AppContext.Provider value={{ state, questions, nextStep, prevStep }}>
            {props.children}
        </AppContext.Provider>
    )

}


