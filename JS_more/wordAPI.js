const availableWords = [
    {
        "word": "inevitable",
        "results": [
          {
            "definition": "an unavoidable event",
            "partOfSpeech": "noun",
            "typeOf": [
              "fate",
              "destiny"
            ],
            "examples": [
              "don't argue with the inevitable"
            ]
          },
          {
            "definition": "incapable of being avoided or prevented",
            "partOfSpeech": "adjective",
            "similarTo": [
              "fateful",
              "ineluctable",
              "inescapable",
              "necessary",
              "unavoidable",
              "fatal"
            ],
            "antonyms": [
              "evitable"
            ],
            "derivation": [
              "inevitability",
              "inevitableness"
            ],
            "examples": [
              "the inevitable result"
            ]
          },
          {
            "definition": "invariably occurring or appearing",
            "partOfSpeech": "adjective",
            "similarTo": [
              "predictable"
            ],
            "derivation": [
              "inevitability",
              "inevitableness"
            ],
            "examples": [
              "the inevitable changes of the seasons"
            ]
          }
        ],
        "syllables": {
          "count": 5,
          "list": [
            "in",
            "ev",
            "i",
            "ta",
            "ble"
          ]
        },
        "pronunciation": {
          "all": "ɪn'ɛvɪtəbəl"
        },
        "frequency": 3.77
      },

      {
        "word": "ascendancy",
        "results": [
          {
            "definition": "the state that exists when one person or group has power over another",
            "partOfSpeech": "noun",
            "synonyms": [
              "ascendance",
              "ascendence",
              "ascendency",
              "control",
              "dominance"
            ],
            "typeOf": [
              "condition",
              "status"
            ],
            "hasTypes": [
              "ascendent",
              "despotism",
              "domination",
              "dominion",
              "mastery",
              "monopoly",
              "predominance",
              "predomination",
              "prepotency",
              "regulation",
              "rule",
              "supremacy",
              "absolutism",
              "tyranny",
              "ascendant"
            ],
            "derivation": [
              "ascend",
              "ascendant"
            ]
          }
        ],
        "syllables": {
          "count": 4,
          "list": [
            "as",
            "cend",
            "an",
            "cy"
          ]
        },
        "pronunciation": {
          "all": "ə'sɛndənsi"
        },
        "frequency": 2.03
      },

      {
        "word": "boastful",
        "results": [
          {
            "definition": "exhibiting self-importance",
            "partOfSpeech": "adjective",
            "synonyms": [
              "big",
              "braggart",
              "bragging",
              "braggy",
              "cock-a-hoop",
              "crowing",
              "self-aggrandising",
              "self-aggrandizing"
            ],
            "similarTo": [
              "proud"
            ],
            "derivation": [
              "boastfulness"
            ]
          }
        ],
        "syllables": {
          "count": 2,
          "list": [
            "boast",
            "ful"
          ]
        },
        "pronunciation": {
          "all": "'boʊstfəl"
        },
        "frequency": 2.2
      }
]


let inpBox = document.querySelector('#entered-word');
let outputBox = document.querySelector('#output');
// let inpWord = inpBox.value;

let nClicks = 0;
function wordDetails(e){
    e.preventDefault();
    nClicks++;
    if(nClicks > 1 && inpBox.value !== ''){
        let inpWord = inpBox.value;

        inpBox.value = '';

        for(let i = 0; i < availableWords.length; i++){
            if(availableWords[i].word === inpWord){
                console.log('feature working properly');
                let p ='';

                // let nextLine = /\n/;

                for(let j = 0; j < availableWords[i].results.length; j++){

                    p = p + availableWords[i].results[j].definition + '<br>';

                    outputBox.innerHTML = p;
                    // outputBox.appendChild(nextLine);
                    console.log(p);
                }
            }
        }

        // outputBox.addClassList(maxContent);

        console.log(inpWord);
        // outputBox.value = inpWord;
        inpBox.value = '';
    }
}

inpBox.addEventListener('click', wordDetails);
inpBox.addEventListener('keypress', function(e){
    finalStr = '';
    if(e.key === 'Enter')
        inpBox.click();
    }
)
// availableWords[1].results[0].definition;
