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
                    "id": "morning heading",
                    "content": "Morning List: available until 5 PM"
                },
                {
                    "type": "todo",
                    "id": "lidocainePatchRemove",
                    "content": "First thing when you wake up. Remove your Lidocaine patch from last night",
                },
                {
                    "type": "todo",
                    "id": "waterBottlesStart",
                    "content": "Fill the 4 water bttles to the top line (not full). Drink them throughout the day. Use them for tea if you make tea.",
                },
                {
                    "type": "todo",
                    "id": "ketoneDrink",
                    "content": "Drink one of the little orange bottles of Ketone IQ.",
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "padFullnessRow",
                    "elements": [
                        {
                            "type": "range",
                            "id": "padFullness",
                            "title": "How full was your over-night pad when you took it off?",
                            "length": 5,
                            "0": "dry",
                            "1": "dribble",
                            "2": "half full",
                            "3": "full",
                            "4": "overflowed",
                        }],
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "morningAnklesRow",
                    "elements": [
                        {
                            "type": "range",
                            "id": "morningAnkles",
                            "title": "How swolen were your ankles when you woke up?",
                            "length": 5,
                            "0": "none",
                            "4": "Dangerously swolen",
                        }
                    ]
                },
                {
                    "type": "reminder",
                    "id": "socksWet",
                    "content": `Wear a fresh set of socks every day. They feel wet but they are not. The fabric is special to keep your feet cool while walking so they feel wet to the toucheven even though they are not wet.`
                },
                {
                    "type": "reminder",
                    "id": "happyHome",
                    "content": `Review your <a target="_blank" href="https://docs.google.com/document/d/18jUBmUHkGcMsaqP7mDtTXkRPzfTsvelNH0cBs3J1Lb4/edit">Happy Home Guide</a>.`
                },
                {
                    "type": "reminder",
                    "id": "benToDos",
                    "content": `You can look at the <a target="_blank" href="https://airtable.com/appF0QFBllxKyqbrA/tblz2dYmjvcTY1mKV/viwqV9Dz3NhqUAd00?blocks=hide">tasks Ben is working on for you</a>.`
                },
                {
                    "type": "reminder",
                    "id": "Dishes",
                    "content": "Reminder: When you finish eating put a little water in the pyrex dish, put on the lid and set it in the turquoise bucket."
                },
                {
                    "type": "reminder",
                    "id": "textIfNeedGroceries",
                    "content": "Reminder: If you need Groceries? Text Ben that you need help with groceries. Do not buy them by yourself"
                },
                {
                    "type": "reminder",
                    "id": "textquestionTimeReminder",
                    "content": "Reminder: The questions above are just your morning list. other questions will automatically appear here after 5PM. Those should not be answered until then so don't worry about answering them until later."
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
                    "type": "row",
                    "striped": true,
                    "id": "temperatureRow",
                    "elements": [
                        {
                            "length": 5,
                            "0": "none",
                            "4": "Dangerously swolen",
                            "type": "singleSelect",
                            "id": "temperature",
                            "title": "How was you home temperature today?",
                            "options": [
                                {
                                    "text": "mostly OK",
                                    "value": "ok"
                                },
                                {
                                    "text": "Mostly too cold",
                                    "value": "cold"
                                },
                                {
                                    "text": "Mostly too hot",
                                    "value": "hot"
                                },
                                {
                                    "text": "Fluctuates uncomfortably",
                                    "value": "fluctuates"
                                },
                            ],
                        },
                    ]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "eveningAnklesRow",
                    "elements": [
                        {
                            "type": "range",
                            "id": "eveningAnkles",
                            "title": "How swolen are your ankles after 5 PM?",
                            "length": 5,
                            "0": "none",
                            "4": "Dangerously swolen",
                        },
                    ]
                },
                {
                    "type": "row",
                    "striped": true,
                    "id": "fingerTinglesRow",
                    "elements": [
                        {
                            "type": "range",
                            "id": "fingerTingles",
                            "title": "Finger tip pain or tingling?",
                            "length": 5,
                            "0": "none",
                            "1": "tingling several times today",
                            "2": "Tingling Most of the day",
                            "3": "Painful several times today",
                            "4": "Painful Most of the day",
                        },]
                },
                {
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
                    "id": "waterBottlesEnd",
                    "content": "Did you drink all 4 water bottles?",
                },
                {
                    "type": "todo",
                    "id": "lidocainePatch",
                    "content": "Put on Lidocaine patch before bed",
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
            "type": "todo",
            "id": "vitamins",
            "content": "(Don't take vitamins until after surgery) Have you taken your vitamins from the manual pill box",
        },
        {
            "type": "todo",
            "id": "bloodpressure",
            "content": `Take your blood pressure. <br/><br/>
            <ul>
            <li> Put on right arm with the button near our elbow</li>
            <li> Take 10 deep breaths</li>
            <li> Press the button, wait a second, then press it again</li>
            </ul>`,
            "doneContent": "Blood Pressure",
            "instructions": `<iframe style="width:100%;aspect-ratio: 16 / 9; max-height:90vh; max-width:90vw" src="https://www.youtube.com/embed/e5Cem5oahho?start=53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
        },
        {
            "type": "todo",
            "id": "weight",
            "content": "Weigh Yourself. It will save your readings to the computer so you don't need to write them down.",
        },
        {
            "type": "todo",
            "id": "floss",
            "content": "Floss Teeth. Use the colorful sandles towel haning on the towl rack then hang it back up on the towel rack so it can dry.",
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
                    "id": "sensation",
                },
                {
                    "type": "text",
                    "prefix": " ",
                    "id": "side",
                },
                {
                    "type": "text",
                    "prefix": " ",
                    "id": "location",
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
                            "text": "chest",
                            "value": "chest"
                        },
                        {
                            "text": "upper back",
                            "value": "upperBack"
                        },
                        {
                            "text": "middle back",
                            "value": "middleBack"
                        },
                        {
                            "text": "lower back",
                            "value": "lowerBack",
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
                            "text": "spasm",
                            "value": "spasm"
                        },
                        {
                            "text": "shooting",
                            "value": "shooting"
                        },
                        {
                            "text": "sharp",
                            "value": "sharp"
                        },
                        {
                            "text": "dull",
                            "value": "dull"
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
        {
            "type": "heading",
            "level": 2,
            "id": "h1Calendar",
            "content": "Calendar"
        },
        {
            "type": "Html",
            "id": "calendar",
            "content": `
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&src=b2xpcGhhbnRzdXphbm5lQGdtYWlsLmNvbQ&color=%23E67C73" style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
            `,
        },
    ]
}
