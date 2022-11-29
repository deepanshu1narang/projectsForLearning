/// trial using normal JS

let sp = document.querySelectorAll('.sample-paragraphs');
//  sp.length for its length
for(let i = 0; i < sp.length; i++){
    sp[i].innerText = 'Sample Paragraph ' + (i+1);
    sp[i].style.color = 'red';
}
let normalJs = document.getElementById('normal-js');
if( normalJs.hasChildNodes( document.querySelector('h6') ) ){
    normalJs.removeChild(document.querySelector('h6'));
}

/// done using normal JS


/// trial using jQuery

$('#trial').html('Trial successful');
// $('#trial').remove();
$('.sample-paragraphs2')[0].style.color = 'green';
let sp2 = $('.sample-paragraphs2');

for(let i = 0; i < sp.length; i++){
    sp2.eq(i).html( 'Sample Paragraph ' + (i+1) ); // eq(index no.)
    sp2.eq(i).css({
        color : `rgb( ${32*i}, ${126*i}, ${94*i} )`,
        fontSize : `${16 + i/2}px`
        // backgroundColor: 'white'
    });
}
$('#jquery-task1 h6').detach();
$('table').hide();

let newListItem1 = $("<li> sp2[0] and sp2.eq(0) are different</li>");
let newListItem2 = $("<li>sp2[0] gives DOM object.</li>")
let newListItem3 = $("<li>sp2[0] gives some jQuery thing.</li>")

newListItem1.appendTo('#beginning ol');
newListItem2.appendTo('#beginning ol');
newListItem3.appendTo('#beginning ol');

// toggleClass means if class is there it'll be removed and if class is not there it'll be added.

let orderedList = $('ol');
orderedList.addClass("randomClass");

// sp2.removeClass('sample-paragraphs2');
sp2.toggleClass("randomClass");
sp2.removeClass("sample-paragraphs2");
sp2.toggleClass("sample-paragraphs2");
orderedList.removeClass('randomClass');

if( sp2.hasClass('sample-paragraphs2') )
    console.log(true);

$('#button1').click(function(){
    alert('button clicked');
})


//       A          JJJJJJJJJ         A          X   X
//      A A             J            A A          X X
//     A   A            J           A   A          X
//    AAAAAAA           J          AAAAAAA        X X
//   A       A       J  J         A       A      X   X
//  A         A       JJ         A         A    X     X

////// button
{
    function enterFunc(){
        console.log('this one working too');
    }
    function leaveFunc(){
        console.log('tussi jaa rhe?');
    }

    function fetchDogImage(){
        
        let xhrRequest = new XMLHttpRequest();

        // xhrRequest.onload --- to make a function on loading
        xhrRequest.onload = function(){
            // console.log('AJAX Request testing successful');
            console.log(xhrRequest.response);

            // for response that is understandable or simply to process JSON
            // look, xhrRequest.response is the result that we need and it is showing but as an object.... so we need to parse it

            let responseJSON = JSON.parse(xhrRequest.response);
            let status = responseJSON.status;
            console.log(status);
            let imageUrl = responseJSON.message //bcoz message is showing image url
            $('#dog-image').attr('src', imageUrl);
        }

        // xhrRequest.open('method','url',boolean) // to initalise request
        // boolean = {true : asynchronous, false : synchronous}
        xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);

        xhrRequest.send(); // to make request to the server
    }

    $('#jquery-button').on({
        click : fetchDogImage,
        mouseenter : enterFunc,
        mouseleave : leaveFunc
    });

    
}

{
    $('.sample-paragraphs2').eq(3).on({
        click : function(){
            $('.sample-paragraphs2').eq(3).html(`Secret feature unlocked. double click me to remove the text written as QR Code`);
        },
        dblClick : function(){
            $('#l2 p').eq(0).remove();
            $('.sample-paragraphs2').eq(3).html('done!');
        }
    })
}

////////////////// api practice

{

    // write code here
    function getDogImage(){
        // api calling using AJAX
        $.ajax({
            method : 'GET',
            url : "https://dog.ceo/api/breeds/image/random",
            success : function(responseData){
                // data is in JSON already so we don't need to pass it
                let imageUrl = responseData.message;
                $('#dog-image2').attr('src', imageUrl);
            }
        })
    }

    $('#qrCode-api').on({
        click : getDogImage
    });

}

{
    // NASA api
    // I'll deal with you later
}

{

    {
        let factorial = (n) => {
            let p = 1;
            for(let i = 1; i <= n; i++){
                p = p * i;
            }
            return p;
        }
        
        let nCr = (n,r) => {
            return factorial(n)/( factorial(r) * factorial(n-r) );
        }

        let nPr = (n,r) => {
            return nCr(n,r) * factorial(r);
        }

        let x = nCr(8,4);
        let y = nPr(8,4);
        console.log(x,y);
    }

    {
        let str01 = 'football';
        let str02 = 'desktop';

        function counter(str, ltr){
            let c = 0;
            for(let i = 0; i< str.length; i++){
                if(ltr === str[i]){
                    c += 1;
                }
                else
                    continue;
            }
            return c;
        }

        console.log(counter(str01,'o'));
        console.log(counter(str01,'b'));
        console.log(counter(str01,'l'));
        console.log(counter(str02,'o'));
        console.log(counter(str02,'p'));
        console.log(counter(str02,'p'));
        console.log(counter(str02,'i'));
    }

    {
        /// recursion 
        function recFact(n){
            if(n === 0){
                return 1
            }
            return n * recFact(n-1);
        }

        console.log(recFact(5));
        console.log(recFact(6));
        console.log(recFact(7));
        console.log(recFact(8));
        console.log(recFact(9));
    }

    ////////// hcf

        function smaller(a,b){
            if (a<b)
                return a;
            else
                return b;
        }

    {
        function hcf(a,b){
            let gcd = 1;
            if( a === smaller(a,b) && b%a === 0)
                gcd = a;
            else if( b === smaller(a,b) && a%b === 0)
                gcd = b;
            // real thing is here
            else{
                for(let i = 1; i < smaller(a,b); i++){
                    if(a%i === 0 && b%i === 0)
                        gcd = i;
                }
            }
            return gcd;
        }

        console.log(hcf(2154, 458));
        console.log(Math.max(2,4,5,7));
    }

    {
        
        let testArray = [2, 4, 6, 8, 2, 3, 5, 7, 9, 4, 32, 76, 45, 67, 9];

        let write = function(x){
            'use strict';
            console.log(x);
        }

        function nonUnique(anyArray){
            'use strict';
            let repeatedElements = [];
            for (let i in anyArray){
                for (let j in anyArray){
                    if( (i !== j) && (anyArray[i] === anyArray[j]) ){
                        // repeatedElements = repeatedElements + anyArray[j];
                        repeatedElements.push(anyArray[j]);
                    }
                    else if(i === j){
                        continue;
                    }
                }
            }
            write( Array.from(new Set(repeatedElements)) );
            // write( typeof (Array.from(new Set(repeatedElements)))[0] );
        }

        nonUnique(testArray);

    }

    {

        function getRandomNumber(min,max){
            return Math.floor( (Math.random() * (max - min)) + min) ;
        } 

        let write = function(x){
            'use strict';
            console.log(x);
        }

        function getArray(){
            'use strict';
            let array01 = [];
            let len = getRandomNumber(17, 47);
            
            for(let i = 0; i < len; i++){
                array01.push( getRandomNumber(0,21) );
                // array01.pop(0)
            }

            // write(len);
            write(array01);

        }

        $('body').on({
            click: getArray
        });

    }

}