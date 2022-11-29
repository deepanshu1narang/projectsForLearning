const workSpace = document.getElementById('work-space');
let text01 = document.createTextNode('Fetch API tutorial\n');
workSpace.appendChild(text01);

const button1 = document.querySelector('#button1');
const fetchDataButton = document.querySelector('#fetchData');

function dummyFunc() {
    console.log('started dummyFunc\nit gave a promise.\nconsequently we are using then');

    url = "ajaxText.txt";

    let fetchRes = fetch(url);

    fetchRes.then(function (response) {
        console.log('Inside first then.\nIt returns another promise and because of it we will be using second then');

        return response.text(); // another promise
    }).then((data) => {
        console.log("inside second then");
        console.log(data);
    })

}

console.log('dummyFunc to understand this thing');
console.log('before running dummyFunc');
dummyFunc();
console.log('after running dummyFunc');


////// usage of JSON data using fetch api 
/////////// retrival of data from JSON
////////// api.github.com/users

fetch(
    'https://api.github.com/users'
).then((response) => {
    // return JSON.parse(response.text().toString());
    return response.json();
}).then((data) => {
    // console.log( JSON.parse(data) );
    console.log(data);
    console.log(typeof data);

    let out = 'work-space<br>';
    Array.from(data).forEach((elem) => {
        out += elem.avatar_url;
        workSpace.innerHTML = out;
        console.log(elem);
    })

});

const workSpace2 = document.getElementById('work-space2');

function retrieveData() {
    fetch(
        'https://api.github.com/users'
    ).then((response) => {
        // return JSON.parse(response.text().toString());
        return response.json();
    }).then((data) => {
        // console.log( JSON.parse(data) );
        console.log(data);
        console.log(typeof data);

        let out = 'work-space2<br>';
        Array.from(data).forEach((elem) => {
            out += elem.avatar_url;
            workSpace2.innerHTML = out;
            console.log(elem);
        })

    });
}

retrieveData();

const workSpace3 = document.getElementById('work-space3');


fetch('https://api.github.com/users', {
    method: 'get'
}).then(function (response) {
    return response.json();
}).then((data) => {
    let out = '<p>/<p>work-space3<br>';
    Array.from(data).forEach((elem, i) => {
        i++;
        out += [i] + '. ' + elem.node_id + '<br>';
        workSpace3.innerHTML = out;
        console.log(elem);
    })
})

//////////// POST Request 

const workSpace4 = document.getElementById('work-space4');

const url2 = 'https://dummy.restapiexample.com/api/v1/create';
let data3 = {"name":"Deepanshu","salary":"100","age":"22"};
// since data is a string so we have to use JSON.stringify
let options = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data3)
    // body : data3
}

fetch(url2,options).then( response => response.json()).then( function(data){
    console.log(data);
    workSpace4.innerHTML = `<table border = '1'>
        <tr>
            <td>name</td>
            <td>${data.data.name}</td>
        </tr>

        <tr>
            <td>id</td>
            <td>${data.data.id}</td>
        </tr>
        <tr>
            <td>age</td>
            <td>${data.data.age}</td>
        </tr>
        <tr>
            <td>salary</td>
            <td>${data.data.salary}</td>
        </tr>
    </table>`
    // workSpace4.innerHTML = data.data.name;
} ).catch( () => {
    workSpace4.innerHTML = 'Sorry Sasuke! Next time';
});