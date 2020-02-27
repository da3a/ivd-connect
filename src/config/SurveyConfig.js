const SurveyConfig =
{
    Header: {
        id: 1,
        name: "David Wallwin",
        termsChecked: false, 
        comments: ""      
    },
Questions:     [
        {
            id: 1,
            text: "Do you notice your skin is firmer?",
            type: "slider",
            initialValue: 50,
            min: 1,
            max: 50,
            step: 1,
            response: null
        },
        {
            id: 2,
            text: "Do you notice your skin is more elastic?",
            type: "radio",
            options: ["Yes", "No", "Maybe"],
            response: null
        },
        {
            id: 3,
            text: "Do you notice a reduction in skin sagging?",
            type: "check",
            options: {"Yes":false, "No":false, "Maybe":false},
            response: null
        },
        {
            id: 4,
            text: "Please commenton the remodelling effect on the face contour?",
            type: "text",
            response: null
        },
        {
            id: 5,
            text:"Do you feel a tensor/ lifting effect on the face contour?",
            type: "slider",
            initialValue: 50,
            min: 1,
            max: 50,
            step: 1,
            response: null
        },
        {
            id: 6,
            text: "Would you buy this product?",
            type: "radio",
            options: ["Yes", "No", "Maybe"],
            response: null
        },
        {
            id: 7,
            text: "How much would you be willing to pay for this product?",
            type: "check",
            options: ["Yes", "No", "Maybe"],
            response: null
        },
        {
            id: 8,
            text: "Value of 1 to 10 if you would recommend this product to a friend or colleague?",
            type: "check",
            options: ["Yes", "No", "Maybe"],
            comments: true,
            response: null
        }
    ]
}

export default SurveyConfig
