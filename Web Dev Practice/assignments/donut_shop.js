const cakeDonut = 50;
const glazedDonut = 80;

let cd = document.getElementById('cakes').value;
let gd  = document.getElementById('glazed-donuts').value;

function calc(){
    subtotal = 0;

    let subtotal = cd*cakeDonut + gd* glazedDonut;

    if  (subtotal< 500){
        const tax = 20;
    }
    else{
        const tax = 15;
    }

    taxed = subtotal + tax/100;

    total = subtotal + taxed;

    let ordered = document.getElementById('order');

    ordered.addEventListener('click',function(e){
        e.preventDefault();
        document.getElementById('subtotal').value = subtotal;
        document.getElementById('tax').value = taxed;
        document.getElementById('total').value = total;
    });
}
