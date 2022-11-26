export const surveyFormat: any = {

    "elements": [
        {
            "type": "heading",
            "level": 1,
            "id": "h1Bms",
            "content": "BMs"
        },
        {
            "type": "events",
            "id": "bMs",
            "addButtonTitle": "Add a BM",
            "summary": [{
                "type": "text",
                "prefix": "BM",
            }],
            "elements": [
                {
                    "type": "select",
                    "id": "thickness",
                    "title": "Thickness",
                    "options": [
                        {
                            "text": "Diarrhea",
                            "value": "-2"
                        },
                        {
                            "text": "Too Soft",
                            "value": "-1"
                        },
                        {
                            "text": "Just Right; toothpaste",
                            "value": "0"
                        },
                        {
                            "text": "Too hard",
                            "value": "1"
                        },
                        {
                            "text": "Painful",
                            "value": "2"
                        },
                    ],
                },
                {
                    "type": "select",
                    "id": "size",
                    "title": "Size",
                    "options": [
                        {
                            "text": "Tablespoon",
                            "value": "-2"
                        },
                        {
                            "text": "1 Cup",
                            "value": "-1"
                        },
                        {
                            "text": "2 Cups - Just right",
                            "value": "0"
                        },
                        {
                            "text": "3 Cups",
                            "value": "1"
                        },
                        {
                            "text": "Massive",
                            "value": "2"
                        },
                    ],
                },
                {
                    "type": "comment",
                    "id": "notes",
                    "title": "BM Notes",
                    "minRows": 1,
                }
            ]
        },
        {
            "type": "events",
            "id": "painEvents",
            "addButtonTitle": "Report a Pain",
            "summary": [{
                "type": "text",
                "prefix": "Pain: ",
                "default": "New ",
                "id": "location",
            }
            ],
            "elements": [
                {
                    "type": "select",
                    "id": "location",
                    "title": "Pain Location",
                    "options": [
                        {
                            "text": "head",
                            "value": "head"
                        },
                        {
                            "text": "neck",
                            "value": "neck"
                        },
                        {
                            "text": "shoulder",
                            "value": "shoulder"
                        },
                        {
                            "text": "upper arm",
                            "value": "upper arm"
                        },
                        {
                            "text": "elbow",
                            "value": "elbow"
                        },
                        {
                            "text": "wrist",
                            "value": "wrist"
                        },
                        {
                            "text": "hand",
                            "value": "hand"
                        },
                        {
                            "text": "finger",
                            "value": "finger"
                        },
                        {
                            "text": "gut",
                            "value": "gut"
                        },
                        {
                            "text": "hip joint",
                            "value": "hip joint"
                        },
                        {
                            "text": "thigh",
                            "value": "thigh"
                        },
                        {
                            "text": "knee",
                            "value": "knee"
                        },
                        {
                            "text": "ankle",
                            "value": "ankle"
                        },
                        {
                            "text": "ball of foot",
                            "value": "ball of foot"
                        },
                        {
                            "text": "toe",
                            "value": "toe"
                        },
                    ],
                },
                {
                    "type": "select",
                    "id": "side",
                    "title": "Pain side",
                    "options": [
                        {
                            "text": "left",
                            "value": "left"
                        },
                        {
                            "text": "right",
                            "value": "right"
                        },
                        {
                            "text": "both",
                            "value": "both"
                        },
                    ],
                },
                {
                    "type": "select",
                    "id": "severity",
                    "title": "Severity",
                    "options": [
                        {
                            "text": "0",
                            "value": "0"
                        },
                        {
                            "text": "1",
                            "value": "1"
                        },
                        {
                            "text": "2",
                            "value": "2"
                        },
                        {
                            "text": "3",
                            "value": "3"
                        },
                        {
                            "text": "4",
                            "value": "4"
                        },
                        {
                            "text": "5",
                            "value": "5"
                        },
                        {
                            "text": "6",
                            "value": "6"
                        },
                        {
                            "text": "7",
                            "value": "7"
                        },
                        {
                            "text": "8",
                            "value": "8"
                        },
                        {
                            "text": "9",
                            "value": "9"
                        },
                        {
                            "text": "10",
                            "value": "10"
                        },
                    ],
                },
                {
                    "type": "selectButtons",
                    "id": "sensation",
                    "title": "Sensation:",
                    "options": [
                        {
                            "text": "shooting",
                            "value": "shooting"
                        },
                        {
                            "text": "tingling",
                            "value": "tingling"
                        },
                        {
                            "text": "aching",
                            "value": "aching"
                        },
                        {
                            "text": "joint",
                            "value": "joint"
                        },
                        {
                            "text": "muscle",
                            "value": "muscle"
                        },
                        {
                            "text": "skin",
                            "value": "skin"
                        },
                        {
                            "text": "itchy",
                            "value": "itchy"
                        },
                        {
                            "text": "stings",
                            "value": "stings"
                        },
                        {
                            "text": "bleeding",
                            "value": "bleeding"
                        },
                        {
                            "text": "burning",
                            "value": "burning"
                        },
                        {
                            "text": "throbbing",
                            "value": "throbbing"
                        },
                    ],
                },
                {
                    "type": "selectButtons",
                    "id": "triggers",
                    "title": "Triggers:",
                    "options": [
                        {
                            "text": "morning",
                            "value": "morning"
                        },
                        {
                            "text": "evening",
                            "value": "evening"
                        },
                        {
                            "text": "eating",
                            "value": "eating"
                        },
                        {
                            "text": "walking",
                            "value": "walking"
                        },
                        {
                            "text": "chores",
                            "value": "chores"
                        },
                        {
                            "text": "bending over",
                            "value": "bending over"
                        },
                        {
                            "text": "lying down",
                            "value": "lying down"
                        },
                        {
                            "text": "standing",
                            "value": "standing"
                        },
                    ],
                },
                {
                    "type": "comment",
                    "id": "cause",
                    "title": "Did an event cause this pain? like a fall, accident. Please describe or put \"unknown\"",
                    "minRows": 1,
                },
                {
                    "type": "comment",
                    "id": "notes",
                    "title": "Pain Notes",
                    "minRows": 1,
                },
            ]
        },
        {
            "type": "heading",
            "level": 1,
            "id": "h1Tasks",
            "content": "Tasks"
        },
        {
            "type": "reminder",
            "id": "walk",
            "content": "Walk? try only 5 minutes, later in the day, and don't exercise arms"
        },
        {
            "type": "reminder",
            "id": "DiclofenacReminder",
            "content": "Do not use Diclofenac gel until you speak to Ben"
        },
        {
            "type": "reminder",
            "id": "textIfNoisyNeighbor",
            "content": "Noisy Neighbor? Text Ben when it is hapening"
        },
        {
            "type": "reminder",
            "id": "textIfNeedGroceries",
            "content": "Need Groceries? Text Ben that you need help with groceries"
        },
        {
            "type": "todo",
            "id": "backStretches",
            "content": "Do Back Stretches",
            "instructions": `
            <ul>
                <li> Stand in the doorway facing the door jam</li>
                <li> Grab the door jamb with both hands</li>
                <li> Pull your body back stretching your arms straight and your back</li>
                <li> Do 3 times for a count of 20</li>
            </ul>
            <iframe width="100%" style="aspect-ratio: 16 / 9; max-height:90vh; max-width:90vw" src="https://www.youtube.com/embed/vaz9sdMUeFc?clip=UgkxchdG427-SfMMBnAIbDMbVgWr92tflwCD&amp;clipt=EIiMCRjo4Aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
        },
        {
            "type": "todo",
            "id": "floss",
            "content": "Floss teeth",
        },
        {
            "type": "heading",
            "level": 1,
            "id": "h1Feel",
            "content": "How do you feel today?"
        },
        {
            "type": "matrix",
            "name": "feelToday",
            "title": "",
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
            "type": "heading",
            "level": 1,
            "id": "h1Pain",
            "content": "Pain"
        },
        {
            "type": "matrix",
            "name": "pain",
            "title": "",
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
                "shoulders",
                "arms",
                "wrists",
                "hands",
                "thighs",
                "hip joints",
                "calves",
                "feet",
            ]
        },
        {
            "type": "heading",
            "level": 1,
            "id": "h1Other",
            "content": "Other"
        },
        {
            "type": "matrix",
            "name": "other",
            "title": "",
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
                    "value": "confusion",
                    "text": "confusion"
                },
                {
                    "value": "forgetful",
                    "text": "forgetful"
                },
                {
                    "value": "swolenAnkles",
                    "text": "swolen ankles"
                },
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
            "type": "heading",
            "level": 1,
            "id": "h1Notes",
            "content": "Notes"
        },
        {
            "type": "comment",
            "id": "notes",
            "title": ""
        }
    ]
}
