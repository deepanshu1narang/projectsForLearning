function ageOf(){
    let today = new Date();
    let age = ( ( today.getTime() - this.dob.getTime() )/(1000*60*60*24*365) );
    console.log(`age of ${this.name} is ${age} years.`)
}

let person1 ={
    name : "Deepanshu",
    clan: "Narang",
    college: "NIT Kurukshetra",
    dob: new Date(1999, 10, 19),
    statement: function(){
        console.log(this.name + ' ' + this.clan  + ' is an alumni of ' + this.college);
    }
}

let person2 = {
    name: "Naruto",
    clan: "Uzumaki",
    college: "Konoha Ninja Academy",
    dob : new Date(1992, 09, 10),
    findAge: ageOf
}

person2.findAge.call(person1);
person1.statement.apply(person2);

let person3 = {
    name: "Sasuke",
    clan: "Uchiha",
    college: "Konoha Ninja Academy",
    dob: new Date(1992, 05, 22),
    introduction : function(){
        console.log(this.clan + ' ' + this.name +' da.');
    }
}

let myIntro = person3.introduction.bind(person1);
myIntro();

///// local storage and session storage

localStorage.clear();

localStorage.setItem('hello','world');
localStorage.setItem('local','storage');
localStorage.setItem('session','storage');
localStorage.setItem('key','value');
localStorage.setItem('code with','harry');
localStorage.setItem('namaste javascript','akshay saini');
localStorage.setItem('microsoft wali','didi');
localStorage.setItem('Uchiha','Madara');

let randomNumber = Math.ceil(Math.random() * (110 - 10) + 10);
console.log(randomNumber);
let guesses = [24, 46, 78, 99, 53, 105, 10, 84, 29, 11, 83, 57]
let deviation = (b) => {
    return Math.abs((randomNumber-b)/randomNumber);
}

console.log(guesses.length);


let localStorageArray = new Array();
for (let item in localStorage){
    localStorageArray.push(item);
}
localStorageArray.pop('clear');
localStorageArray.pop('length');
localStorageArray.pop('setItem');
localStorageArray.pop('getItem');
localStorageArray.pop('key');
localStorageArray.pop('removeItem');
console.log(localStorageArray);


let garbageValue = 0;
for (let i = 0; i<guesses.length; i++){
    let d = deviation(guesses[i]);
    if(d <= 0.1){
        console.log(guesses[i], localStorage.getItem('hello'));
    }
    else if(d > 0.1 && d <= 0.2){
        console.log(guesses[i], localStorage.getItem('local'));
    }
    else if(d > 0.2 && d <= 0.3){
        console.log(guesses[i], localStorage.getItem('session'));
    }
    else if(d > 0.3 && d <= 0.4){
        console.log(guesses[i], localStorage.getItem('key'));
    }
    else if(d > 0.4 && d <= 0.5){
        console.log(guesses[i], localStorage.getItem('code with'));
    }
    else if(d > 0.5 && d <= 0.6){
        console.log(guesses[i], localStorage.getItem('namaste javascript'));
    }
    else if(d > 0.6 && d <= 0.7){
        console.log(guesses[i], localStorage.getItem('microsoft wali'));
    }
    else if(d > 0.7 && d <= 0.75){
        console.log(guesses[i], localStorage.getItem('Uchiha'));
    }
    else if(d > 0.75 && d <= 0.8){
        localStorage.removeItem('session');
        console.log(guesses[i], 'session removed');
    }
    else if(d > 0.8 && d <= 0.85){
        localStorage.removeItem('Uchiha');
        console.log(guesses[i], 'Uchiha removed');
    }
    else if(d > 0.8 && d<= 0.9){
        localStorage.removeItem('code with');
        console.log(guesses[i], 'code with removed');
    }
    else if(d>0.9){
        localStorage.clear();
        console.log(guesses[i], 'local storage cleared');
        break;
    }
}

let ob1 = {
    1:2,
    3:4,
    5:6,
    '7':8
}

let arr1 = [12, 23, 34, 45, 56];

let ob101 = JSON.stringify(ob1);
localStorage.setItem('object1',ob101);

let arr101 = JSON.stringify(arr1);
localStorage.setItem('array1',arr1);

let ob2 = arr2 = ['dell', 'hp', 'apple', 'lenovo', 'asus', 'chromebook'];
localStorage.setItem('arr202',JSON.stringify(arr2));


console.log(localStorage);
console.log(typeof(localStorage));

let ninja = {
    "name":"Neji Hyuga",
    clan: "Hyuga",
    rank:"Jonin",
    "kekkei genkai": "Byakugan",
    age: 17
}

// let stor = localStorage;

// arrayInMaking();

let keyNames = Object.keys(ninja);
let keyNames2 = Object.getOwnPropertyNames(person1);



let button1 = document.getElementById('submit');
button1.addEventListener('click',addDetail);

function addDetail(e){
    e.preventDefault();
    let name1 = document.getElementById('name').value;
    let inputBox =  document.getElementById('name');
    console.log(name1);
    inputBox.value=' ';
    
}

////// input game
let multiply = document.getElementById('multiply')
multiply.addEventListener('click',multiply01);

let result = document.querySelector('#result');

function multiply01(e1){
    e1.preventDefault();
    // let n1 = document.querySelectorAll('#n1');
    // let n2 = document.querySelectorAll('#n2');
    let val_n1 = document.getElementById('n1').value;
    let val_n2 = document.getElementById('n2').value;

    result.innerHTML = val_n1 * val_n2;

    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
}


let divide01 = (e2) => {
    e2.preventDefault();
    // let n1 = document.querySelectorAll('#n1');
    // let n2 = document.querySelectorAll('#n2');
    let val_n1 = document.querySelector('#n1').value;
    let val_n2 = document.querySelector('#n2').value;
    
    result.innerHTML = val_n1 / val_n2;

    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
}

let divide = document.getElementById('divide');
divide.addEventListener('click',divide01);

result.addEventListener('dblclick',function(){
    result.innerHTML = '';
});

///  user ddefined variable
let nov = document.getElementById('userDefinedVariable');
nov.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        // let novStored = nov.value;
        // console.log(novStored);
        // document.getElementById('userDefinedVariable').value ='';
        document.getElementsByClassName('hiddenButton')[0].click();
    }
})

let vov = document.getElementById('userDefinedValue');
vov.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        document.getElementsByClassName('hiddenButton')[1].click();
    }
})

// function clickIt(){
//     let novStored = nov.value;
//     show01.innerHTML = addPy(novStored);
//     document.getElementById('userDefinedVariable').value ='';
// }

function clickIt2(){
    let vovStored = vov.value;
        console.log(vovStored);
        show02.innerHTML = vovStored;
        document.getElementById('userDefinedValue').value = '';
}

let udv = document.getElementById('user-defined-variable');
let show01 = document.createElement('p');
show01.id = 'showResult';
udv.appendChild(show01);
let show02 = document.createElement('p');
udv.appendChild(show02)[1];

function addPy(a){
    return 'Py' + a;
}

function clickIt(){
    let novStored = nov.value;

    // if(novStored.match(/^\d/) == true ){
    if(isDigit(novStored[0]) == false ){

        for(let i = 0; i < novStored.length; i++){
            if(novStored[i] != ' ' ){
                show01.innerHTML = addPy(novStored);
            }
            
            else{
                show01.innerHTML = `variable name not accepted`;
                break;
            }
        }
        
    }

    else if (isDigit(novStored[0]) == true){
        show01.innerHTML = `variable name not accepted`;
    }

    document.getElementById('userDefinedVariable').value ='';
}

function isDigit(num){
    if(num != 0 && num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9){
        return false;
    }
    else if( num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9 ){
        return true;
    }
}

let array001 = [3,5,1,67,32,876,3,987,14,8765,234,98,4,8765,236,054,533];
let array002 = new Array();


for(let i=0; i< array001.length; i++){
    let ranIndex = Math.floor(Math.random() * array001.length);
    array002.push( array001[ranIndex] );
}

console.log(array002);