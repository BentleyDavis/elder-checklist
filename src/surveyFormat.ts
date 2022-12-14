export const surveyFormat: any = {

    "elements": [
        {
            "type": "ShowByTime",
            "id": "evening2",
            "showByTime": 17,
            "buttonTextBefore": "switch to evening list",
            "buttonTextAfter": "switch to morning list",
            "elementsBefore": [
                {
                    "type": "heading",
                    "level": 1,
                    "id": "evening",
                    "content": "Morning List: available until 5 PM"
                },
                {
                    "type": "todo",
                    "id": "lidocainePatchRemove",
                    "content": "First thing when you wake up. Remove your Lidocaine patch from last night",
                },
                {
                    "type": "reminder",
                    "id": "walk",
                    "content": "Reminder: if you go out walking: only 15 minutes out and 15 minutes back, later in the day when warm, and don't exercise arms"
                },
                {
                    "type": "reminder",
                    "id": "textIfNoisyNeighbor",
                    "content": "Reminder: If you neighbor is noisy then text Ben. Even if it is late in the evening."
                },
                {
                    "type": "reminder",
                    "id": "textIfNeedGroceries",
                    "content": "Reminder: If you need Groceries? Text Ben that you need help with groceries. Do not buy them by yourself"
                },
                {
                    "type": "todo",
                    "id": "morningPt",
                    "content": "Morning Physical Therapy with Ben",
                    "instructions": `
                    Shoulder Pinches
                    <ul>
                        <li> Sit on bench with column pillow at your back</li>
                        <li> Pinch your shoulder blades to the back and towards each other like you are pinching the pillow itwh your shoulders.
                        (it might help to move them slightly up if that helps you pick them narrower)</li>
                        <li> Pinch <b>10</b> times</li>
                    </ul>
                    <br>
                    Cane Raise
                    <ul>
                    <li> Get your cane.</li>
                        <li> Sit on your bed near the foot board.</li>
                        <li> Lie on your bed with your knees bent leaving lots of room between youe head and headboard.</li>
                        <li> Hold the cane in both hands with your elbows and wrists and fingers straight</li>
                        <li> Keeping your elbows straight, lift your arms straight up overhead as far as is comfortably possible.</li>
                        <li> Make sure to keep your shoulders in contact with the bed</li>
                        <li> Hold the cane for 5 seconds as far above and back of youe head</li>
                        <li> bring the cane back to rest on your legs</li>
                        <li>repeat this movement <b>15</b> times</li>
                    </ul>
                    `
                },
            ],

            "elementsAfter": [
                {
                    "type": "heading",
                    "level": 1,
                    "id": "evening",
                    "content": "Evening List: available after 5 PM"
                },
                {
                    "type": "heading",
                    "level": 2,
                    "id": "h1Feel",
                    "content": "How do you feel today?"
                },
                {
                    "type": "range",
                    "id": "feelToday",
                    "0": "Great",
                    "5": "OK",
                    "10": "Worst Ever",

                },
                {
                    "type": "heading",
                    "level": 2,
                    "id": "h1Pain",
                    "content": "Pain"
                },
                {
                    "type": "matrix",
                    "id": "pain",
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
                    "level": 2,
                    "id": "h1Other",
                    "content": "Other"
                },
                {
                    // "type": "stepper",
                    // "id": "stepperOther",
                    // "elements": [{
                    "type": "row",
                    "striped": true,
                    "id": "bmToday",
                    "elements": [{
                        "type": "singleSelect",
                        "id": "bmToday",
                        "title": "Did you have a BM today?",
                        "options": [
                            {
                                "text": "yes",
                                "value": true
                            },
                            {
                                "text": "no",
                                "value": false
                            },
                        ],
                    }]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "noisyNeighbor",
                    "elements": [{
                        "type": "range",
                        "id": "noisyNeighbor",
                        "title": "How noisy were your neighbors today?",
                        "0": "silent",
                        "10": "worst",
                    }]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "runnyNose",
                    "elements": [{
                        "type": "range",
                        "id": "runnyNose",
                        "title": "How runny was your nose today?",
                        "0": "none",
                        "10": "heavy dripping",
                    }]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "pinkyBent",
                    "elements": [{
                        "type": "range",
                        "id": "pinkyBent",
                        "title": "How much was your pinky bent and/or hurting today?",
                        "0": "none",
                        "10": "constantly bent",
                    }]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "teethPain",
                    "elements": [{
                        "type": "range",
                        "id": "teethPain",
                        "title": "How painful were your teeth today?",
                        "0": "none",
                        "10": "constant strong pain",
                    }]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "cramps",
                    "elements": [{
                        "type": "singleSelect",
                        "id": "cramps",
                        "title": "Did you have cramps or spasams anywhere in your body today?",
                        "options": [
                            {
                                "text": "yes",
                                "value": true
                            },
                            {
                                "text": "no",
                                "value": false
                            },
                        ],
                    },
                    {
                        "type": "comment",
                        "hide": "data.cramps!==true",
                        "id": "crampLocations",
                        "width": "full",
                        "title": "Is so, describe the cramps and their location",
                        "minRows": 1,
                    }
                    ]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "confusion",
                    "elements": [{
                        "type": "range",
                        "id": "confusion",
                        "title": "How confused did you feel today?",
                        "0": "none",
                        "5": "some",
                        "10": "worst",
                    }]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "dizzy",
                    "elements": [{
                        "type": "range",
                        "id": "dizzy",
                        "title": "How dizzy did you feel today?",
                        "0": "none",
                        "5": "some",
                        "10": "worst",
                    }]
                    // },
                    // ]
                },
                {
                    "type": "matrix",
                    "id": "other",
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
                            "value": "forgetful",
                            "text": "forgetful"
                        },
                        {
                            "value": "swolenAnkles",
                            "text": "swolen ankles"
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
                    "type": "todo",
                    "id": "lidocainePatch",
                    "content": "Put on Lidocaine patch before bed",
                },
                {
                    "type": "todo",
                    "id": "eveningPt",
                    "content": "Evening Physical Therapy with Ben",
                    "instructions": `
                    Shoulder Pinches
                    <ul>
                        <li> Sit on bench with column pillow at your back</li>
                        <li> Pinch your shoulder blades to the back and towards each other like you are pinching the pillow itwh your shoulders.
                        (it might help to move them slightly up if that helps you pick them narrower)</li>
                        <li> Pinch <b>10</b> times</li>
                    </ul>
                    <br>
                    Cane Raise
                    <ul>
                    <li> Get your cane.</li>
                        <li> Sit on your bed near the foot board.</li>
                        <li> Lie on your bed with your knees bent leaving lots of room between youe head and headboard.</li>
                        <li> Hold the cane in both hands with your elbows and wrists and fingers straight</li>
                        <li> Keeping your elbows straight, lift your arms straight up overhead as far as is comfortably possible.</li>
                        <li> Make sure to keep your shoulders in contact with the bed</li>
                        <li> Hold the cane for 5 seconds as far above and back of youe head</li>
                        <li> bring the cane back to rest on your legs</li>
                        <li>repeat this movement <b>15</b> times</li>
                    </ul>
                    `
                },
            ],
        },
        {
            "type": "heading",
            "level": 1,
            "id": "allDayHeading",
            "content": "All Day List"
        },
        // {
        //     "type": "heading",
        //     "level": 2,
        //     "id": "tasks",
        //     "content": "To Dos (Tasks)"
        // },
        // {
        //     "type": "todo",
        //     "id": "backStretches",
        //     "content": "Do Back Stretches",
        //     "instructions": `
        //     <ul>
        //         <li> Stand in the doorway facing the door jam</li>
        //         <li> Grab the door jamb with both hands</li>
        //         <li> Pull your body back stretching your arms straight and your back</li>
        //         <li> Do 3 times for a count of 20</li>
        //     </ul>
        //     <iframe width="100%" style="aspect-ratio: 16 / 9; max-height:90vh; max-width:90vw" src="https://www.youtube.com/embed/vaz9sdMUeFc?clip=UgkxchdG427-SfMMBnAIbDMbVgWr92tflwCD&amp;clipt=EIiMCRjo4Aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //     `
        // },
        {
            "type": "counter",
            "id": "glassesFilled",
            "title": "Drinks: Make <b>6</b> glasses of water or tea (only 1/2 tablespoon of cream in tea)",
        },
        {
            "type": "counter",
            "id": "glassesDrank",
            "title": "How many have you drank so far?",
        },
        {
            "type": "row",
            "striped": true,
            "id": "pinkyCurls",
            "elements": [{
                "type": "counter",
                "id": "pinkyCurls",
                "title": "Pinkies: <b>4</b> times today take off each brace one at a time and make a fist <b>5</b> times being sure to curl your pinky. ",
            }],
        },
        {
            "type": "todo",
            "id": "vitamins",
            "content": "Have you taken your vitamins from the manual pill box",
        },
        {
            "type": "todo",
            "id": "bloodpressure",
            "content": "Take your blood pressure",
            "instructions": `
            <ul>
                <li> Put on right arm with the button near our elbow</li>
                <li> Press the button, wait a second, then press it again.</li>
            </ul>
            <iframe style="width:100%;aspect-ratio: 16 / 9; max-height:90vh; max-width:90vw" src="https://www.youtube.com/embed/e5Cem5oahho?start=53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
        },
        {
            "type": "todo",
            "id": "weight",
            "content": "Weigh Yourself",
        },
        {
            "type": "todo",
            "id": "floss",
            "content": "Floss teeth",
        },
        {
            "type": "heading",
            "level": 2,
            "id": "h1Bms",
            "content": "BMs"
        },
        {
            "type": "events",
            "id": "bMs",
            "addButtonTitle": "Add a BM",
            "summary": [
                {
                    "id": "when.display",
                    "type": "text",
                    "prefix": "BM: ",
                }
            ],
            "elements": [
                {
                    "type": "time",
                    "id": "when",
                    "default": "now",
                    "recent": true,
                    "title": "When did this happen?"
                },
                {
                    "type": "singleSelect",
                    "id": "thickness",
                    "title": "Thickness",
                    "options": [
                        {
                            "text": "Diarrhea",
                            "value": "-2"
                        },
                        {
                            "text": "loose",
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
                    "type": "singleSelect",
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
                    "id": "bmNotes",
                    "width": "full",
                    "title": "BM Notes",
                    "minRows": 1,
                }
            ]
        },
        {
            "type": "heading",
            "level": 2,
            "id": "painEventHeading",
            "content": "Report a special pain event"
        },
        {
            "type": "events",
            "id": "painEvents",
            "addButtonTitle": "Report a Pain",
            "summary": [
                {
                    "type": "text",
                    "prefix": "Pain: ",
                    "id": "location",
                }, {
                    "type": "text",
                    "prefix": "-",
                    "id": "side",
                },
                {
                    "type": "counter",
                    "title": " | times:",
                    "id": "times",
                },
            ],
            "elements": [
                {
                    "type": "time",
                    "id": "when",
                    "default": "now",
                    "revent": true,
                    "title": "When did this first happen?"
                },
                {
                    "type": "singleSelect",
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
                    "type": "singleSelect",
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
                    "type": "singleSelect",
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
                    "type": "counter",
                    "title": "How many times today?",
                    "id": "times",
                },
                {
                    "type": "multiSelect",
                    "id": "sensation",
                    "title": "Sensations (Choose many):",
                    "width": "full",
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
                    "type": "multiSelect",
                    "id": "triggers",
                    "width": "full",
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
                        {
                            "text": "sitting",
                            "value": "sitting"
                        },
                        {
                            "text": "gripping",
                            "value": "gripping"
                        },
                    ],
                },
                {
                    "type": "comment",
                    "id": "cause",
                    "width": "full",
                    "title": "Did an event cause this pain? like a fall, accident. Please describe or put \"unknown\"",
                    "minRows": 1,
                },
                {
                    "type": "comment",
                    "id": "notes",
                    "width": "full",
                    "title": "Pain Notes",
                    "minRows": 1,
                },
            ]
        },
        {
            "type": "heading",
            "level": 2,
            "id": "h1Notes",
            "content": "Notes"
        },
        {
            "type": "comment",
            "id": "notes",
            "title": ""
        },
    ]
}
