// console.log(givenString.length);
let element = document.getElementsByTagName('p');
let textInside = element[0].innerText;
function rotation(){
    // console.log(textInside);
    textInside = textInside[textInside.length -1] + textInside.substring(0,textInside.length - 1);
    console.log(textInside);
}

let rotateButton = document.getElementById('rotate');
let rotate = rotateButton.addEventListener('click', rotation);