export const surveyFormat: any = {

    "elements": [
        {
            "type": "h1",
            "id": "tasksH1",
            "content": "Tasks"
        },
        {
            "type": "reminder",
            "id": "DiclofenacReminder",
            "content": "Reminder: Do not use Diclofenac gel until you speak to Ben"
        },
        {
            "type": "todo",
            "id": "backStretches",
            "content": "Do Back Stretches",
        },
        {
            "type": "todo",
            "id": "floss",
            "content": "Floss teeth",
        },
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
                    "text": "feel?"
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
                    "value": "chest",
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
                "arms",
                "hands",
                "thighs",
                "calves",
                "feet"
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
                    "text": "dizziness"
                },
                {
                    "value": "bladder",
                    "text": " bladder trouble"
                },
                {
                    "value": "rashes",
                    "text": "rashes"
                },
                {
                    "value": "gutNoise",
                    "text": "loud gut"
                },
                {
                    "value": "spam",
                    "text": "spam call ring"
                },
                {
                    "value": "noise",
                    "text": "noisy neighbors"
                },
                {
                    "value": "ringing",
                    "text": "ringing noise"
                },
                {
                    "value": "weirdNoises",
                    "text": "chanting/ mumbling"
                }
            ]
        },
        {
            "type": "comment",
            "name": "notes",
            "title": "Notes"
        }
    ]
}
