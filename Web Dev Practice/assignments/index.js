const studentsArray = [
    {
        "name": "Deepanshu",
        "branch": "Computer Science",
        "semester": 8,
        "subject": "Web Dev",
        "subjectCode": "WD01"
    },

    {
        "name": "Sumit",
        "branch": "Information Technology",
        "semester":5 ,
        "subject":"Java",
        "subjectCode":"J024"
    },

    {
        "name": "Tanya",
        "branch": "ECE",
        "semester": 6 ,
        "subject":"C++",
        "subjectCode":"C27"
    },
    
    {
        "name": "Vibhu",
        "branch": "Civil",
        "semester": 7,
        "subject": "python",
        "subjectCode": "p352"
    },

    {
        "name": "Sunidhi",
        "branch": "ECE",
        "semester": 4,
        "subject": "Android Dev",
        "subjectCode": "A094"
    },

    {
        "name": "Chandu",
        "branch": "Information Technology",
        "semester": 6,
        "subject": "SAP UI5",
        "subjectCode": "S023"
    }
];

fillTable(studentsArray);

function fillTable(anyArray){
    let table = document.getElementById('table');

    for(let i = 0; i < anyArray.length; i++){
        let row = `<tr>
                        <td>${anyArray[i].name}</td>
                        <td>${anyArray[i].branch}</td>
                        <td>${anyArray[i].semester}</td>
                        <td>${anyArray[i].subject}</td>
                        <td>${anyArray[i].subjectCode}</td>
                    </tr>`;

        table.innerHTML += row; 
    }
}