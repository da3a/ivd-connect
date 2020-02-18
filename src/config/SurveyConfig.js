const SurveyConfig =
{
    Header: {
        Id: 1,
        Name: "David Wallwin"       
    },
Questions:     [
        {
            Id: 1,
            Text: "Do you notice your skin is firmer?",
            Type: "Slider",
            InitialValue: 50,
            Min: 1,
            Max: 50,
            Step: 1,
            Response: 10
        },
        {
            Id: 2,
            Text: "Do you notice your skin is more elastic?",
            Type: "Radio",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 3,
            Text: "Do you notice a reduction in skin sagging?",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 4,
            Text: "Do you notice a remodelling effect on the face contour?",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Comments: true,
            Response: 0
        },
        {
            Id: 5,
            Text:"Do you feel a tensor/ lifting effect on the face contour?",
            Type: "Slider",
            InitialValue: 50,
            Min: 1,
            Max: 50,
            Step: 1,
            Response: 0
        },
        {
            Id: 6,
            Text: "Would you buy this product?",
            Type: "Radio",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 7,
            Text: "How much would you be willing to pay for this product?",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Response: 0
        },
        {
            Id: 8,
            Text: "Value of 1 to 10 if you would recommend this product to a friend or colleague?",
            Type: "Check",
            Options: ["Yes", "No", "Maybe"],
            Comments: true,
            Response: 0
        }
    ]
}

export default SurveyConfig
