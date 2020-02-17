const SurveyConfig =
{
    Header: {
        Id: 1,
        Name: "David Wallwin"       
    },
Questions:     [
        {
            Id: 1,
            Text: "Question 1",
            Type: "Slider",
            InitialValue: 50,
            Min: 1,
            Max: 50,
            Step: 1,
            Response: 0
        },
        {
            Id: 2,
            Text: "Question 2",
            Type: "Radio",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 3,
            Text: "Question 3",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 4,
            Text: "Question 4",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Comments: true,
            Response: 0
        },
        {
            Id: 5,
            Text: "Question 5",
            Type: "Slider",
            InitialValue: 50,
            Min: 1,
            Max: 50,
            Step: 1,
            Response: 0
        },
        {
            Id: 6,
            Text: "Question 6",
            Type: "Radio",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 7,
            Text: "Question 7",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 8,
            Text: "Question 8",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Comments: true,
            Response: 0
        }
    ]
}

export default SurveyConfig
