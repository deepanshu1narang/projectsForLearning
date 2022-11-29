// "use strict"
let submitEntry = document.getElementById('submit');

submitEntry.addEventListener("click", displayDetails);

// submitEntry.addEventListener("click", function(){
//     setTimeout(resetDetails,1000);
// });

document.body.addEventListener("mousemove",function(event){
    document.body.style.backgroundColor = `rgb(${event.offsetX/4},${event.offsetY/7}, ${(event.offsetX - event.offsetY)/2})`;
});

let reset = document.getElementById('reset');
// reset.click();
reset.addEventListener("click",resetDetails);


// functions
let row = 1;
function displayDetails(e){
    e.preventDefault();

    // get the values filled in form using .value
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let gender = document.getElementById('gender').value;
    let age = document.getElementById('age').value;
    let specialisation = document.getElementById('specialisation').value;
    let experience = document.getElementById('experience').value;
    let achievements = document.getElementById('achievements').value;

    let tableFill = document.getElementById('data-table');

    let newRow = tableFill.insertRow(row);
    // start counting cell no. from 0
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);
    let cell6 = newRow.insertCell(6);

    // getting info to table cells
    cell0.innerHTML = firstName;
    cell1.innerHTML = lastName;
    cell2.innerHTML = gender;
    cell3.innerHTML = age;
    cell4.innerHTML = specialisation;
    cell5.innerHTML = experience;
    cell6.innerHTML = achievements;

    row++;
    
    reset.click();
    // resetDetails();
};

function resetDetails(e){
    e.preventDefault();

    let firstName2 = document.getElementById('fname');
    let lastName2 = document.getElementById('lname');
    let gender2 = document.getElementById('gender');
    let age2 = document.getElementById('age');
    let specialisation2 = document.getElementById('specialisation');
    let experience2 = document.getElementById('experience');
    let achievements2 = document.getElementById('achievements');

    firstName2.value = "";
    lastName2.value = "";
    gender2.value = "";
    age2.value = "";
    specialisation2.value = "";
    experience2.value = "";
    achievements2.value = "";
}