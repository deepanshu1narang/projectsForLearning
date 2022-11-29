Object.prototype.getName = function(){
    return this.name.toUpperCase();
}


// clean version of oops.js

class CreatePerson2{

    constructor(name, clan, age, hometown, gradYears, laptopCost){
        this.name = name;
        this.clan = clan;
        this.age = age;
        this.hometown = hometown;
        this.gradYears = gradYears;
        this.laptopCost = laptopCost;
    }

}

let person01 = new CreatePerson2('Deepanshu', 'Narang', 22, 'kaithal', 4, 65000);
console.log(person01.name);

let person02 = new CreatePerson2('Sanya', '', 20, 'pundri', 3, 80000);
console.log(person02['laptopCost']);

///////// rate of interest

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


///////  Vehicle

class Vehicle{

    constructor(company, name, numWheels, price){
        this.company = company;
        this.name = name;
        this.price = price;
        this.numWheels = numWheels;
        this.isNew = true;
    }

    // methods OR behaviors
    getDiscount(n){
        if (n <= 12)
            return 4 / 100 * this.price;
        else if (n > 12 && n <= 24)
            return 2 / 100 * this.price;
        else
            return 0;
    }

    priceToPay(installments){
        let roi = rateOfInterest(installments);
        const a = this.price * Math.pow((1 + roi), installments / 12) - this.getDiscount(installments);

        return {
            emi: a / installments,
            totalPrice: a,
            interestPaid: a - this.price,
            interestPaidPercent: (a - this.price) / a * 100
        };
    }

    depreciation(age){
        // rate_of_depreciation = 5%;
        return {
            salePrice: this.price * Math.pow(0.95, age),
            valueLost: this.price * (1 - Math.pow(0.95, age))
        }
    }

    broken(){
        console.log(`This vehicle ${this.company} ${this.name} knew pain`);
    }
}

Vehicle.prototype.color = 'black';

let vehicle1 = new Vehicle('Audi', 'A8', 4, 5500000);
vehicle1.color = 'blue';
let vehicle2 = new Vehicle('BMW', 'Q4 Bike', 2, 1100000);
let vehicle3 = new Vehicle('Bugatti', 'Veyron', 4, 113900000);
let vehicle4 = new Vehicle('Maruti','800', 4, 250000);
vehicle4.isNew = false;
vehicle4.color = 'white';

console.log(vehicle1.price);
console.log(Object.getPrototypeOf(vehicle2));
console.log(Object.getPrototypeOf(vehicle1));
console.log(vehicle3.priceToPay(4).emi);


{
    console.table({
        'vehicle1.__proto__': vehicle1.__proto__,
        'Vehicle.prototype': Vehicle.prototype,
        'Object.getPrototypeOf(vehicle1)': Object.getPrototypeOf(vehicle1)
    });
    console.log('these all are same');
}


//////////////// class Phone

class Phone {

    constructor(company01, name, price, ram, storage) {
        this.company = company01;
        this.name = name;
        this.price = price;
        this.ram = ram;
        this.storage = storage;
        this.warranty = 1;
        this.color = 'black';
        this.os = 'Android';
    }

    
    discount(subscription) { 
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

    priceToPay(installments, subscription){
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
        console.log(`This ${this.company} ${this.name} got to knew pain`);
    }

}

let phone1 = new Phone('One Plus', 'nord 2t', 29000, 8, 128);
let phone2 = new Phone('One Plus', 'nord 2t', 34000, 12, 256);
let phone3 = new Phone('samsung', 'J7 prime', 15000, 3, 16);
phone3.color = 'blue';
let phone4 = new Phone('Oppo', 'Nat geo 3', 38000, 8, 128);

console.log(phone2.price);
console.log(phone2.ram);
console.log(phone2);
console.log(phone2.discount(true));
console.log(phone2.priceToPay(1, true).emi);

delete Object.prototype.getName;


///// iPhone

class Iphone extends Phone{

    constructor(company, name, price, ram, storage, os, edition){
        super(company, name +' ' + edition, price, ram, storage);
        this.company = 'Apple';
        this.os = os;
    }

    fallen(){
        console.log('Sayonara da! ' + this.company + " " + this.name + '-chan');
    }

    // trial to give inherited property
    broke(){ // behaviour overriding ............ behaviour of its own....if you want a parentt function and a child function to work simultaneously
        super.broken(); // calling parent function
        this.fallen();
    }

    static printf(x,y){
        console.log(x);
    }

}

let iphone1 = new Iphone('Apple', 'Iphone 13', 115000, 8, 128, 'iOS', 'pro');
let iphone2 = new Iphone('Apple', 'Iphone 12', 75000, 8, 128, 'iOS', 'pro max');
console.log(iphone1);

Iphone.printf(iphone2.priceToPay(1,true).emi);


Iphone.printf('blue bird;');