class Library{

    constructor(listOfBooks){  // array as argument
        this.listOfBooks = listOfBooks;
        this.issuedBooks = {};
    }

    getBookList(){
        this.listOfBooks.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, person){
        if(this.listOfBooks.includes(bookName)){
            if(this.issuedBooks[bookName] === undefined){
                this.issuedBooks[bookName] = person;
                console.log(`${bookName} issued to ${person}`);
            }
            else if(this.issuedBooks[bookName] !== undefined){
                console.log(`${bookName} has already been issued to someone else.`);
            }

        }
            else
                console.log(`OOPs! ${bookName} does not exist in this library`);
    }

    returnBook(bookName, person){
        if(this.issuedBooks[bookName] === person){
            delete this.issuedBooks[bookName];
            console.log(`${bookName} has been returned by ${person}`);
        }
        else if(this.issuedBooks[bookName] !== person){
            console.log(`${person} had never issued ${bookName}.`);
        }
    }

}

let library01 = new Library(['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6', 'Book7'])

{
    console.log('feature testing log: getBookList');
    console.log(library01.listOfBooks);
    library01.getBookList();
}

{
    console.log('feature testing log: issueBook');
    library01.issueBook('Book1', 'Deepanshu Narang');
    library01.issueBook('Book2', 'Sanya Narang');
    library01.issueBook('Book3', 'Sai');
    library01.issueBook('Book4', 'Itachi Uchiha');
    library01.issueBook('Book7 ', 'Madara Uchiha');
    library01.issueBook('Alice and Wonderland', 'Sasuke Uchiha');
}

{
    console.log('feature testing: returnBook');
    library01.returnBook('Book4', 'Deepanshu Narang');
    library01.returnBook('Book1', 'Deepanshu Narang');
}

{
    console.log(library01.issuedBooks);
}


{
    let test11 = document.getElementById('test11');
    let test12 = document.getElementById('test12');
    let test13 = document.getElementById('test13');
    let test14= document.getElementById('test14');
    console.log('some testing with setTimeOut');

    let testFunction = () =>{
        let arr001 = [];
        for(let i = 0; i< 5001; i++){
            arr001.push(i);
        }
        test11.innerHTML = '';

        for(let x = 0; x< arr001.length; x++){
            test11.innerHTML += arr001.slice(x, x+1) + ' || ';
        }
    }

    let testFunction2 = () =>{
        let arr001 = [];
        for(let i = 0; i< 5001; i++){
            arr001.push(i);
        }
        test14.innerHTML = '';

        for(let x = 0; x< arr001.length; x++){
            test14.innerHTML += arr001.slice(x, x+1) + ' || ';
        }
    }
    
    test12.innerHTML = 'observe it';
    testFunction();
    setTimeout(testFunction2 ,6000);
    setTimeout(() => {
        test13.innerHTML = 'just observe it';
    },3000);

    setTimeout(() =>{
        test13.innerHTML = 'did you observe it?';
    }, 9000);

}

(function(){
    console.log('It is an IIFE');
})();

// callBack understanding
{
    function callbackTest(endMessage, callback){
        console.log('callbackFunc will be used for testing');
        console.log('testing starts');
        const timeNow = new Date().getTime();
        let timeThen = timeNow;

        while(timeThen <  timeNow + 10000){
            timeThen = new Date().getTime();
        }

        // callbackFunc('testing successful');
        try{
            callback('testing successful');
        }catch(error){
            console.log('testing failed because of', error.name, error['message'])
            console.log(error);
        }
        console.log(endMessage);
    }

    function callbackFunc(param){
        console.log(param);
    }

    function anotherTest(m){
        console.log(m);
    }

    callbackTest('testing done!', callbackFunc);
    callbackTest('testing done!', anotherTest);
}