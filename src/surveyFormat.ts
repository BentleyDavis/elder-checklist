export const surveyFormat: any = {
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "matrix",
                    "name": "feelToday",
                    "title": "How do you feel today?",
                    "verticalAlign": "top",
                    "columns": [
                        {
                            "value": "0",
                            "text": "great"
                        },
                        {
                            "value": "1",
                            "text": "good"
                        },
                        {
                            "value": "2",
                            "text": "ok"
                        },
                        {
                            "value": "3",
                            "text": "so so"
                        },
                        {
                            "value": "4",
                            "text": "bad"
                        }
                    ],
                    "rows": [
                        {
                            "value": "feel",
                            "text": " "
                        }
                    ]
                },
                {
                    "type": "matrix",
                    "name": "pain",
                    "title": "Pain",
                    "verticalAlign": "top",
                    "alternateRows": true,
                    "columns": [
                        {
                            "value": "0",
                            "text": "none"
                        },
                        {
                            "value": "1",
                            "text": "slight"
                        },
                        {
                            "value": "2",
                            "text": "some"
                        },
                        {
                            "value": "3",
                            "text": "painful"
                        },
                        {
                            "value": "4",
                            "text": "very"
                        }
                    ],
                    "rows": [
                        {
                            "value": "check",
                            "text": "chest"
                        },
                        {
                            "value": "upperBack",
                            "text": "upper back"
                        },
                        {
                            "value": "lowerBack",
                            "text": "lower back"
                        },
                        "hands",
                        "thighs",
                        "calves",
                        "feet",
                        "arms"
                    ]
                },
                {
                    "type": "matrix",
                    "name": "other",
                    "title": "Other",
                    "alternateRows": true,
                    "columns": [
                        {
                            "value": "0",
                            "text": "none"
                        },
                        {
                            "value": "1",
                            "text": "little"
                        },
                        {
                            "value": "2",
                            "text": "some"
                        },
                        {
                            "value": "3",
                            "text": "often"
                        },
                        {
                            "value": "4",
                            "text": "bad"
                        }
                    ],
                    "rows": [
                        {
                            "value": "dizziness",
                            "text": " dizziness"
                        },
                        {
                            "value": "bladder",
                            "text": " bladder trouble"
                        },
                        {
                            "value": "gutNoise",
                            "text": " lout gut"
                        },
                        {
                            "value": "spam",
                            "text": " spam call ring"
                        },
                        {
                            "value": "noise",
                            "text": " noisy neighbors"
                        },
                        {
                            "value": "ringing",
                            "text": " ringing noise"
                        },
                        {
                            "value": "weirdNoises",
                            "text": " chanting/ mumbling"
                        }
                    ]
                },
                {
                    "type": "comment",
                    "name": "question4",
                    "title": "Notes"
                }
            ]
        }
    ]
}