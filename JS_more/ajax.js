console.log('AJAX tutorial in one video -- CWH');

let fetchButton = document.querySelector('#fetchButton');

fetchButton.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    let x = 32;
    console.log(`You clicked the ${this.innerText} button`);

    // initiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the xhr object
    if (x < 21) {
        xhr.open('GET', 'ajaxText.txt', true);
        // true for asynchronous AND false for synchronous

        // What to do when response is ready (onload)
        xhr.onload = function () {
            console.log(this.responseText);
            console.log(typeof this.responseText);
        }
    }
    else if (x > 20) {
        xhr.open('GET', 'random.json', true);

        xhr.onload = function () {
            console.log(this.responseText);
            console.log(typeof this.responseText);
            console.log(JSON.parse(this.responseText));
            console.log(typeof JSON.parse(this.responseText));
        }
    }

    // What to do on progress (OPTIONAL)
    xhr.onprogress = function () {
        console.log('Working on it..');
        console.log('progress then loading')
    }

    // send the request
    xhr.send();

}


let fetchButton2 = document.querySelectorAll('#fetchButton2')[0];

fetchButton2.addEventListener('click', buttonClickHandler2);

function buttonClickHandler2(e) {

    console.log(e);
    console.log(`You clicked the ${this.innerText} button`);

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);

    xhr.onload = function () {
        console.log(this.responseText);
        console.log(typeof this.responseText);
        console.log(JSON.parse(this.responseText));
        console.log(typeof JSON.parse(this.responseText));
    }

    xhr.send();
}

///////////////// post request ////////////
let sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', buttonClickHandler3);

function buttonClickHandler3() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://reqres.in/api/users', true);

    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onprogress = function () {
        console.log('Working on it..');
        console.log('progress then loading')
    }


    xhr.onload = function () {
        console.log(this.response);
        console.log(typeof this.responseText);
        console.log(JSON.parse(this.responseText));
        console.log(typeof JSON.parse(this.responseText));
    }

    parameters = `{"name" : "Deepanshu Narang", "job" : "developer"}`;
    xhr.send(parameters);
    // console.log("///////////");
}


let sendButton2 = document.querySelector('#sendButton2');

sendButton2.addEventListener('click', buttonClickHandler3);

function buttonClickHandler3() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://restapi.adequateshop.com/api/Tourist', true);

    xhr.getResponseHeader('Content-Type: multipart/form-data; boundary=something', 'application/json');

    xhr.onprogress = function () {
        console.log('Working on it..');
        console.log('progress then loading')
    }


    xhr.onload = function () {
        console.log(this.responseText);
        console.log(typeof this.responseText);
        console.log(JSON.parse(this.responseText));
        console.log(typeof JSON.parse(this.responseText));
    }

    parameters = `{"tourist_name" : "Deepanshu Narang", "tourist_email" : "tourist321@gmail.com", "tourist_location" : "California"}`;
    xhr.send(parameters);
    // console.log("///////////");
}

{
    let xVal = document.getElementById('x-val');
    let pRes = document.createElement('p');
    document.querySelectorAll('#ajax span')[0].appendChild(pRes);

    let nClicks2 = 0;
    // pRes.setAttribute('id', 'xValClick');

    function addValue() {
        // e.preventDefault();
        nClicks2++;
        console.log(nClicks2);

        function a(){
            if (nClicks2 > 1) {

                if (xVal.value !== '') {

                    if ( !isNaN(Number( xVal.value) ) ) {
                        pRes.innerHTML = '<u>Something to show: ' + xVal.value + '.</u>';
                        console.log(xVal.value);
                    }
                    else if ( isNaN(Number( xVal.value) ) ) {
                        pRes.innerHTML = '<b>Please enter number only</b>';
                        console.log(`${xVal.value} not accepted`);
                    }
                    xVal.value = '';
                }

                // if (xVal.value === ''){
                //     pRes.innerHTML = '<i>Please enter some number.</i>';
                // }
                
            }
        }
        a();

    }

    xVal.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            // nClicks2 = 1;
            xVal.click();
        }
    });


}