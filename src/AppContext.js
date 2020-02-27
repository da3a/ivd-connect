import React, { createContext, useState } from "react"
import locales from "./locales"
import SurveyConfig from "./config/SurveyConfig"

export const AppContext = createContext()

export const PAGE_SIZE = 5

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

    function handleTerms()
    {
        console.log(`toggling accept terms`)
        let tempSurvey = survey
        tempSurvey.Header.termsChecked = !tempSurvey.Header.termsChecked
        setSurvey(prevSurvey => (tempSurvey))
    }

    function  onUpdateQuestion(id, response)  {
        console.log(`update question id ${id} ${JSON.stringify(response)}`)
        var tempSurvey = survey
        tempSurvey.Questions.filter(question => (question.id === id)).map(question => question.response = response)
        setSurvey(prevSurvey => (tempSurvey))
    }

    function nextStep() {        
        console.log("nextStep...")

        let start = 1

        if (state.step === 3)
            start = 5
       
        if ([2,3].includes(state.step))
        {
            let responses = survey.Questions.filter(q => (q.id >= parseInt(start) && q.id < (parseInt(start) + PAGE_SIZE))).map(question => (question.response))
            if (responses.includes(null))
                return

        }
        if (state.step === 5 && !survey.Header.termsChecked)
            return 

        setState(prevState => ({ ...prevState, step: state.step + 1 }));
    }

    function prevStep() {
        setState(prevState => ({ ...prevState, step: state.step - 1 }));
    }

    return (
        <AppContext.Provider value={{ state, survey, handleTerms,  onUpdateQuestion, nextStep, prevStep }}>
            {props.children}
        </AppContext.Provider>
    )

}


