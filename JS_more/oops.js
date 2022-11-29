function printf(x){
    console.log(x);
}


let person001 = {
    name: 'Deepasnhu',
    clan: 'Narang',
    age: 22,
    hometown: 'Kaithal',
    gradYears: 4
}

let person002 = {
    name: 'Sanya',
    clan: 'Narang',
    age: 20,
    hometown: 'Kaithal',
    gradYears: 3
}
//  too tedious if 100 such entries are to be made

function createPerson(name, clan = '', age, hometown, gradYears = 4) {
    // 'use strict'
    let person = {};
    person.name = name;
    person.clan = clan
    person.age = age;
    person.hometown = hometown;
    person.gradYears = gradYears;

    return person;
}

let person01 = createPerson('a', 'b', 4, 'c', 1);
let person02 = createPerson('aa', 'bb', 5, 'cc');
// looks easy ////
// it can be easier; HOW???? let's see::::::::: =>

////// Constructor

console.log('Constructors are different in other languages so never use this type of constructor in any other language!!!!!!!!!'.toUpperCase());


{
    function CreatePerson2(name, clan, age, laptopCost) {
        'use strict';

        // let person = {}; // object already created outside

        // arguments already bound to an object that was created but the reason we don't know the name of that object.... let's name it unknownObject

        // unknownObject.name = name;
        // but unknownObject is not defined..... 
        // just use 'this'

        console.log(this); // if bound to  object => this refers to object else to window (depends if it is in strict mode or not)

        this.name = name;
        this.clan = clan;
        this.age = age;
        this.laptopCost = laptopCost;

        // return person; // it does not exist so can't be returned lol 
    }

    let person03 = new CreatePerson2('Deepanshu', 'Narang', 22, 65000);
    console.log(person03.name);

    let person04 = new CreatePerson2('chandu', '', 20, 80000);
    console.log(person04.laptopCost);

    // let person05 = createPerson2('Jiraya','',57,'0');
    // console.log(person05);
    // error due to person05

}

//////  Adding behaviour to Objects

function Vehicle(company, name, numWheels, price) {
    this.company = company;
    this.name = name;
    this.price = price;
    this.numWheels = numWheels;
    // this.installments = installments;
    // adding behaviours
    this.getDiscount = function (n) {
        if (n <= 12)
            return 4 / 100 * this.price;
        else if (n > 12 && n <= 24)
            return 2 / 100 * this.price;
        else
            return 0;
    }


    // this.priceToPay = function(){
    this.priceToPay = function (installments) {
        let roi = rateOfInterest(installments);
        const a = this.price * Math.pow((1 + roi), installments / 12) - this.getDiscount(installments);

        return {
            emi: a / installments,
            totalPrice: a,
            interestPaid: a - this.price,
            interestPaidPercent: (a - this.price) / a * 100
        };
    }

    // this.depreciation = function(age){
    //     // rate_of_depriciation = 5%;
    //     return {
    //         salePrice : this.price * Math.pow(0.95,age),
    //         valueLost : this.price * (1 - Math.pow(0.95,age) )
    //     }
    // }

    {
        /// I GUESS I CAN'T USE A FUNCTION FROM PUTSIDE USE USE FOR MY CLASS LIKR THIS
        /// this.priceToPay = priceToBePaid;
        // That's where prototype comes to use. (CHECK depriciation feature as example.)
    }
}

// function priceToBePaid(installments){
//     // this.installments = installments;
//     let roi = rateOfInterest(installments);
//     let a = this.price* Math.pow( (1 + roi), installments/12) - this.getDiscount(installments);

//     return {
//         emi: a/installments,
//         totalPrice : a,
//         interestPaid : a - this.price,
//         interestPaidPercent : (a -this.price)/a * 100
//     };
// }

// function emiPlan(n){
//     let roi = rateOfInterest(n);
//     let a = this.price* Math.pow( (1 + roi), n) - 0.1 * this.price;
//     return a/n;
// } 

function rateOfInterest(n) {
    if (n <= 6)
        return 0;
    else if (n > 7 && n <= 12)
        return 0.07;
    else if (n > 12 && n <= 20)
        return 0.12;
    else
        return 0.18;
}

Vehicle.prototype.depreciation = function (age) { // prototype
    // rate_of_depriciation = 5%;
    return {
        salePrice: this.price * Math.pow(0.95, age),
        valueLost: this.price * (1 - Math.pow(0.95, age))
    }
};

Object.prototype.getName = function(){
    return this.name.toUpperCase(); 
}

// let freeService = document.getElementById('car-image');
// freeService.addEventListener('dblclick', Vehicle.protoype.freeServicesLeft);

Vehicle.prototype.color = 'blue';
Vehicle.prototype.isNew = true;
Vehicle.prototype.sparePartsAvailable = true;


let vehicle1 = new Vehicle('Audi', 'A8', 4, 5500000);
let vehicle2 = new Vehicle('BMW', 'Q4 Bike', 2, 1100000);
let vehicle3 = new Vehicle('Bugatti', 'Veyron', 4, 113900000);

vehicle1.color = 'black';
// since vehicle1 has color property of its own so it won't be overwritten (1st precedence to its own property than class property) but vehicle2 doesn't. 
console.log(Vehicle);

vehicle1.__proto__; // gives prototype of vehicle1
console.table({
    'vehicle1.__proto__': vehicle1.__proto__,
    'Vehicle.prototype': Vehicle.prototype,
    'Object.getPrototypeOf(vehicle1)': Object.getPrototypeOf(vehicle1)
});
console.log('these all are same');

console.log(Vehicle.prototype.isPrototypeOf(vehicle3)); //to check if the specific prototype is a prototype of given (chosen) object or not
console.log(Vehicle.prototype.isPrototypeOf(person02));

// console.log(depriciation.isPrototypeOf(person02)); // wrong way 



console.log(vehicle1.hasOwnProperty('priceToPay'));
console.log(vehicle1.hasOwnProperty('isNew'));



///// Object

obj01 = new Object();

obj01.name = 'object01';
obj01['typeof'] = 'object';
obj01.madeUsing = 'Object()';

console.log(obj01);

console.log(Object);
console.log(Object.prototype);

// to retrieve prototypes of any object (say obj01)
Object.getPrototypeOf(obj01);
console.log(Object.getPrototypeOf(obj01));

console.log(Object.getPrototypeOf(vehicle3));

console.log(Vehicle.prototype);

Object.prototype.color = 'brown';
console.log(person002.name + " is of " + person002.color + " color.");

let obj02 = new Object({
    prop0: 'attempt',
    prop1: 'trying',
    prop2: 'to',
    prop3: 'set',
    prop4: 'object',
    prop5: 'successful',
    statement09: function () {
        console.log(this.prop0 + " " + this.prop5);
    }
});

obj02.statement09();

console.log('difference between object and Object()');
console.log(typeof obj02); // just an object (key-value pair)
console.log(typeof Object); // it's a constructor function

let randomObject = new Object();
randomObject.purpose = 'nothing but to check unwanted prototypes of Object()';

if (Object.getPrototypeOf(randomObject).hasOwnProperty('color') == true) {
    delete Object.prototype.color;
}

//////////// Class
console.log(`work can be done without using the 'class' keyword. It's just a syntactic sugar.
'class' and 'constructor' keywords are used. Refer to the example given below.
'constructor' keyword is used to internally create constructor unction for the class.`);

class Phone {

    constructor(company, name, price, ram, storage) {
        this.company = company;
        this.name = name;
        this.price = price;
        this.ram = ram;
        this.storage = storage;
        this.warranty = 1;
        this.color = 'black';
        // this.os = 'Android';
    }

    // behaviors .... only as prototyes
    
    discount(subscription) { // behaviour .... can't use keyword funcion before it (I'm sad because of it 😥😥) OR use it like finalPrice = function(subsscription){} or arrow functions  .....  but with 2nd method that function becomes function of oobjects too anmd that's a total memory waste and hence not recommended
        if (subscription == true) {
            this.warranty += 1;
            if (this.price > 20000)
                return 3000;
            else
                return 0;
        }
        else
            return 0;
    }

    priceToPay = (installments, subscription) => {
        let roi = rateOfInterest(installments);
        const a = this.price * Math.pow((1 + roi), installments / 12) - this.discount(subscription);

        return {
            emi: a / installments,
            totalPrice: a,
            interestPaid: a - this.price,
            interestPaidPercent: (a - this.price) / a * 100,
            warranty: this.warranty
        };
    }

    broken(){
        console.log('This phone got to knew pain');
    }

    static add(a,b){ // 'static' keyword used such that the function can be used directly with class without any object from that class
        console.log(a+b);
    }
}

let phone1 = new Phone('One Plus', 'nord 2t', 29000, 8, 128);
let phone2 = new Phone('One Plus', 'nord 2t', 34000, 12, 256);
let phone3 = new Phone('samsung', 'J7 prime', 15000, 3, 16);
let phone4 = new Phone('Oppo', 'Nat geo 3', 38000, 8, 128);

console.log(phone2.price);
console.log(phone2.ram);
console.log(phone2);
console.log(phone2.discount(true));
console.log(phone2.priceToPay(1, true).emi);

let Electronics = class Devices {

    constructor(name) {
        this.name = name;
    }
}

let e1 = new Electronics('boat');
console.log(e1.name);

delete Object.prototype.getName;

Vehicle.prototype.increaseCost = function(){
    this.price *= 1.05;
}

// Inheritence using class in JS

class Iphone extends Phone{

    constructor(company, name, price, ram, storage, os, edition){
        super(company, name +' ' + edition, price, ram, storage);
        // this.company = 'Apple';
        this.os = os;
    }

    // behaviours
    fallen(){
        console.log('Sayonara da! ' + this.name + '-chan');
    }

    // trial to give inherited property
    broke(){ // behaviour overriding ............ behaviour of its own....if you want a parentt function and a child function to work simultaneously
        super.broken(); // calling parent function
        this.fallen();
    }

}

let iphone1 = new Iphone('Apple', 'Iphone 13', 115000, 8, 128, 'iOS', 'pro');
let iphone2 = new Iphone('Apple', 'Iphone 12', 75000, 8, 128, 'iOS', 'pro max');
console.log(iphone1);
Iphone.prototype.company = 'Apple';

printf(iphone2.priceToPay(1,true).emi);

