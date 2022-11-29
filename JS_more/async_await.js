console.log('async');

let asyncP = document.querySelectorAll('#async-await p');



async function printIt() {
    asyncP[0].innerHTML = 'async printIt() working for now';
    // return 
}

printIt();

async function printCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
}

let asaw = document.getElementById('async-await');


printCountries().then((data) => {
    console.log(data);

    data.forEach(element => {
        console.log(element.name.official);
    });

    function namesOut() {
        let xText = '';
        for (let x1 = 0; x1 < data.length; x1++) {
            let cName = data[x1].name.official;
            xText += cName + '<br>';
        }
        asyncP[1].innerHTML = "<h6>offficial names</h6>" + xText;
    };

    namesOut();

    function namesOut2() {
        let h6 = document.createElement('h6');
        h6.innerHTML = 'Common Names';
        asaw.appendChild(h6);

        for (let element = 0; element < data.length; element++) {
            let createdP = document.createElement('p');
            createdP.innerHTML = data[element].name.common;

            createdP.style.lineHeight = '0.5rem';

            asaw.appendChild(createdP);
        }

    }

    namesOut2();

}).catch((error) => console.log('Sorry ' + error.message));

async function harry(){
    console.log('inside harry');
    const response = await fetch("https://api.github.com/usersf");
    console.log('before response');
    const users = await response.json();
    console.log('users resolved');
    return users;

    // return 'Code with Harry';
}

console.log('before calling harry');
const har = harry();
console.log(har);
console.log('after calling harry');

har.then( (data) => {
    console.log(data);
}).catch( (error) => {
    console.log("Sorry! " + error.message);
})

////////////////////////////
console.log('last line of this js file');