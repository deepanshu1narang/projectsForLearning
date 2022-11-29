let date = new Date();
let dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let dayInfo = `Today is ${dayList[date.getDay()]}`;

let month =0 ;
if(date.getMonth() < 10){
    month = '0' + date.getMonth();
}
else{
    month = date.getMonth();
}


let hour = 0;
if(date.getHours() > 0 && date.getHours() < 10){
    hour = '0' + date.getHours();
}
else if(date.getHours() > 10 && date.getHours() <= 12){
    hour = date.getHours();
}
else if(date.getHours() == 0){
    hour = '12';
}
else if(date.getHours() > 12){
    let hour1;
    hour1 = date.getHours() - 12;
    if(hour1 < 10){
        hour = '0' + hour1;
    }
    else{
        hour = hour1;
    }
}

let minute = 0;
if(date.getMinutes() < 10){
    minute = '0' + date.getMinutes();
}
else{
    minute = date.getMinutes();
}

let second = 0;
if(date.getSeconds() < 10){
    second = '0' + date.getSeconds();
}
else{
    second = date.getSeconds();
}

let ap = 'a';
if(date.getHours() > 0 && date.getHours() < 12){
    ap = "AM";
}
else if(date.getHours() >= 12){
    ap = "PM";
}
else if(date.getHours() == 0 && date.getMinutes() == 0 && date.getSeconds() == 0){
    ap = "Midnight";
}
else if(date.getHours() == 12 && date.getMinutes() == 0 && date.getSeconds() == 0){
    ap = 'Noon';
}


// let timeInfo = `Time is: ${hour} : ${minute} : ${second} ${ap}`;
// let dateInfo = `Today's date is ${date.getDate} - ${month} - ${date.getFullYear}`;


///////////////////////

function showTime(){
    document.getElementById('div1').innerHTML = `Today is ${dayList[date.getDay()]}`;
    document.getElementById('div2').innerHTML = `Time is: ${hour} : ${minute} : ${second} ${ap}`;;
    document.getElementById('div3').innerHTML = `Today's date is ${date.getDate()} - ${month} - ${date.getFullYear()}`;    
}