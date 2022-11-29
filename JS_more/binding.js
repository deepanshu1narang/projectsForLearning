/// box challange

let count = document.createElement('p');
count.id = 'counter';
let container = document.getElementById('binding-in-arrow-functions');

let clickMe = document.getElementById('clickMe');
let clicked = 0
clickMe.addEventListener('click',function(){
    clicked += 1;
    count.innerHTML = `button clicked ${clicked} times.`;
});

container.appendChild(count);


