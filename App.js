// to show the notes
showNotes();

// if user adds a note, add it to the local storage.

let addNote = document.querySelector('#addNote');

addNote.addEventListener('click', function (event) {
    event.stopPropagation();
    
    let notes = localStorage.getItem("notes");
    if (notes === null || notes === undefined) {
        // if nothing is stored there as notes then our notesCOllection is an empty array 
        notesCollection = [];
    }
    else {
        // if there are any notes then give me those notes in my collection
        notesCollection = JSON.parse(notes);
    }
    
    let addTitle = document.querySelector('#addTitle');
    let addText = document.querySelector('#addText');

    let fullNote ={
        title : addTitle.value,
        text : addText.value
    }
    // notesCollection.push(addText.value);
    fullNote.title !== "" ? (fullNote.text !== ""  ? notesCollection.push(fullNote) : alert("Please add something to note")) : alert("Please add some title to the note");

    localStorage.setItem("notes", JSON.stringify(notesCollection));

    addTitle.value = "";
    addText.value = "";

    // function to show notes
    showNotes();

});

let addText = document.querySelector('#addText');
addText.addEventListener('keypress', function (event) {
    if (event.ctrlKey && event.key == 'Enter') {
        addNote.click();
    }

});

function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes === null)
        notesCollection = [];
    else {
        notesCollection = JSON.parse(notes);
    }


    let noteHTML = "";

    notesCollection.forEach(function (eachNote, index) {

        noteHTML +=
            `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                <div class="card-body">
                    <i>Note ${index+1}</i>
                    <h5 class="card-text">${eachNote.title}</h5>
                    <p class="card-text">${eachNote.text}</p>
                    <Button id="${index}" onClick = deleteNote(this.id) class="btn btn-primary deleteMe">Delete Note</Button>
                    <Button id="${index+0.5}" onClick = editNote(this.id) class="btn btn-success editMe mx-2 my-2">Edit Note</Button>
                </div>
            </div>`
            // if this breaks then just do it as eachnote inplace of eachnote.text  and delete title

        let notesElement = document.getElementById('notes');
        if (notes.length !== 0) {
            notesElement.innerHTML = noteHTML;
        }
        else {
            const welcomeSentence = `Nothing to show. Add your first note now.`;

            notesElement.innerHTML = `p style="color:chocolate"> ${welcomeSentence} </p>`
        }

    });
    
    highlightTicket();
}

function deleteNote(index) {

    let notes = localStorage.getItem("notes");

    if (notes === null)
        notesCollection = [];
    else {
        notesCollection = JSON.parse(notes);
    }

    notesCollection.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesCollection));

    // debugger;
    showNotes();
}



function editNote(index){
    let notes = localStorage.getItem("notes");

    if (notes === null)
        notesCollection = [];
    else {
        notesCollection = JSON.parse(notes);
    }

    let addTitle = document.querySelector('#addTitle');
    let addText = document.querySelector('#addText');
    
    let editTitle = document.querySelectorAll(".noteCard .card-body h5")[Math.floor(index)];
    let editText = document.querySelectorAll(".noteCard .card-body p")[Math.floor(index)];

    addTitle.value = editTitle.innerText;
    addText.value = editText.innerText;

    deleteNote(index);

    localStorage.setItem("notes", JSON.stringify(notesCollection));

    showNotes();
}


let searchText = document.getElementById('searchText');

function searchIt() {

    let noteContent = document.querySelectorAll(".noteCard p");
    Array.from(noteContent).forEach((element) => {
        let element02 = element.innerHTML.toLowerCase();
        if( element02.includes( searchText.value.toLowerCase() ) ){
            let displayCard = element.parentNode;
            displayCard.style.display = "block";
        }
        else{
            let displayCard = element.parentNode.parentNode;
            displayCard.style.display = "none";
        }
    });

}


function searchIt2(){
    let inputValue = searchText.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(inputValue) || cardTitle.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
}


// searchIt had a bug but it was a good trial. 🤜🤛
searchText.addEventListener("input", searchIt2);
searchText.addEventListener("blur", function () {
    searchText.value = "";
    showNotes();
});

function highlightTicket(){
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        let cardTextL = cardTitle.toLowerCase();

        if( cardTextL.startsWith("ticket") || cardTextL.startsWith("ticket:") ) {
            element.style.backgroundColor = "red";
            element.style.color = "yellow";
        }
    });
}

let marked =  document.getElementById("importanceCheck");
marked.addEventListener('click', function(e){
    // e.preventDefault();
    if(e.target.checked){
        const noteNum = document.querySelectorAll(".noteCard .card-body i")[length];
        noteNum.innerHTML += "important";
    }
});


/*
Further Features:
1. Add Title --- done
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
5. highligh the searched words/phrase in the card.
*/ 

// Bugs :
//     1. The issue being faced at the re-opening time needs to be fixed.
//     2. marking as important not working.

