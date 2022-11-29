{
    // 1st example ------- setTimeout()

    let test11 = document.getElementById('test11');
    let test12 = document.getElementById('test12');
    let test13 = document.getElementById('test13');
    let test14= document.getElementById('test14');
    console.log('some testing with setTimeOut');

    let testFunction = () =>{
        let arr001 = [];
        for(let i = 0; i< 51; i++){
            arr001.push(i);
        }
        // console.log(arr001.split());
        test11.innerHTML = '';

        for(let x = 0; x< arr001.length; x++){
            test11.innerHTML += arr001.slice(x, x+1) + ' ';
            // if(x%30 === 0)
            //     test11.innerHTML += '<br>';
        }
    }

    let testFunction2 = () =>{
        let arr001 = [];
        for(let i = 0; i< 51; i++){
            arr001.push(i);
        }
        // console.log(arr001.split());
        test14.innerHTML = '';

        for(let x = 0; x< arr001.length; x++){
            test14.innerHTML += arr001.slice(x, x+1) + ' ';
            // if(x%50 === 0)
            //     test14.innerHTML += '<br>';
        }
    }
    
    test12.innerHTML = 'observe it';
    testFunction();
    // console.log('test done without setTimeOut');
    setTimeout(testFunction2 ,6000);
    setTimeout(() => {
        test13.innerHTML = 'just observe it';
    },3000);

    setTimeout(() =>{
        test13.innerHTML = 'did you observe it?';
    }, 9000);
    // console.log('doing test with setTimeOut');

}

 
let isWorking = () => {
    console.log('working');
}



