// promises in JS
// resolve
// reject
// pending 

let promise1 = new Promise( function(resolve, reject){
    const x = 10;

    function promX(){
        if(x < 50){
            console.log(`Promise about x is true. I never go back on my words. That's my Nindo: My own Ninja way.`);
            resolve('x = ' + x);
        }
        else{
            console.log('Sorry I could not resolve my promise. It got rejected');
            reject('x = ' + x);
        }
    }
    promX();
});

promise1.then(function(successMessage){
    // then works if promise is fulfilled
    console.log('Promise resolved!! ', successMessage);
}).catch(function(errorMessage){
    // catch works if promise doesn't work
    console.log('Promise rejected!! ', errorMessage);
});


let promise2 = new Promise( function(resolve, reject){
    const y = 200;

    function promY(){
        if(y < 50){
            console.log(`Promise about y is true. I never go back on my words. That's my Nindo: My own Ninja way.`);
            resolve();
        }
        else{
            if(y > 50){
                console.log('Sorry I could not resolve my promise about y. It got rejected');
                reject();
            }
        }
    }
    promY();
});

promise2.then( function(){
    console.log('promise resolved!');
} ).catch( function(){
    console.log('promise rejected 😭');
} );


let factorial = (n) => {
    for(let i = n-1 ; i > 0; i--){
        n = n*i;
    }
    return n;
}

function nCr(n, r, fact){
    let answer = fact(n) / ( fact(r) * fact(n-r) );
    console.log(answer);
}

function nPr(n,r,facto){
    let answer = facto(n) / facto(n-r) ;
    console.log(answer);
}


function pNc(bool){

    return new Promise(function(resolve, reject){
        
        // nPr = resolve
        // nCr = reject
        
        const importanceOfArrangement = bool;
        
        if(importanceOfArrangement === true){
            resolve();
        }
        else if(importanceOfArrangement === false){
            reject();
        }
    });

    // return pORc;
    
}


// WRONG WAY 
// pNc(true).then( nPr(8,5,factorial) ).catch( nCr(8,5, factorial) );
// pNc(false).then( nPr(10,7,factorial) ).catch( nCr(10,7, factorial) );


// RIGHT WAY
pNc(true).then( function(){
    // resolve
    nPr(8,5, factorial);
} ).catch( function(){
    // reject
    nCr(8,5, factorial);
} );

pNc(false).then( function(){
    // resolve
    nPr(10,7,factorial);
} ).catch( function(){
    // reject
    nCr(10,7, factorial);
} );


{

    const div01 = document.createElement('div');
    div01.setAttribute('id','div01');
    document.getElementsByTagName('body')[0].appendChild(div01);
    const h1 = document.createElement('h1');
    h1.innerHTML = 'setTimeOut + closures';
    div01.appendChild(h1);

    const div02 = document.createElement('div');
    div01.appendChild(div02);

    div02.style.backgroundColor = 'red';
    div02.style.color = 'white';
        
    const div03 = document.createElement('div');
    div01.appendChild(div03);

    div03.style.backgroundColor = 'black';
    div03.style.color = 'white';

    const div04 = document.createElement('div');
    div01.appendChild(div04);

    div04.style.backgroundColor = 'cyan';
    div04.style.color = 'green';


    function writeToDiv(decStyle, elem, n){
        elem.innerHTML = '';
        let space = '';

        if(decStyle === 'var'){        
            for(var i = 0; i < n; i++){

                setTimeout( () => {
                    space += i + '  ';
                    elem.innerHTML = space;
                }, i*1000 );
            }
        }

        else if(decStyle === 'let'){
            for(let i = 0; i < n; i++){
                setTimeout( () => {
                    space += i + '  ';
                    elem.innerHTML = space;
                }, i*1000 );
            }
        }

    }


    writeToDiv('var',div02, 16);
    writeToDiv('let',div03, 21);


    function counter(elem, n){
        elem.innerHTML = '';
        let space = '';

        for(var i = 0; i < n; i++){
            function innerCount(i2){
                setTimeout( () => {
                    space += i2 + '  ';
                    elem.innerHTML = space;
                }, i*1000 );
            }
            innerCount(i);
        }
    }

    counter(div04, 25);

}

function regFunc(){
    'use strict';
    console.log(this);
}

const arrowFunc = () => {
    'use strict';
    console.log(this);
}

regFunc();
arrowFunc();
