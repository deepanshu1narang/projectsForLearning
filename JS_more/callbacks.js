console.log('\n\ncallbacks');

const students =[
    {"name" : "Deepanshu",
    "subject" : "Web Dev"
},
{
    "name" : "Akash",
    "subject" : "Android Dev"
},
{
    "name" : "Sanya",
    "subject" : "UI/UX"
}
];


function enrollStudent(newStudentData){
    setTimeout(function(){
        students.push(newStudentData);
    }, 3000);
}

function getStudents(){
    let str = '';
    setTimeout(function(){
        students.forEach(function(student){
            str += `<li> ${student.name} has ${student.subject} </li>`;
        });
        document.getElementById('students-list').innerHTML = str;
    },3001)
}

// getStudents();

class Student{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
}

let student1 = new Student("Aman", "Java");

let student2 = new Student("Naruto", "python");

let student3 = new Student("Sasuke", "C++");

enrollStudent(student1);

getStudents();

// HERE WHEN WE USED enrollStudents() IN 3 SEC BUT getStudents() IN 1 SEC AND IT MESSED UP BECAUSE WHEN WE GOT TE LST NEW STUDENT WAS STILL ENROLLING AND COULD NOT GET HIS NAME PRINTED SO WE HAD 2 OPTIONS.
// EITHER CALLING getStudents() AFTER 3 SEC (MAY BE 3.001 SEC)
// OR USING callback   (sounds better)

// here is how to use callback; (for comparing purposes both functions are used with their names with 2)

function enrollStudent2(newStudentData, callback){
    setTimeout(function(){
        students.push(newStudentData);
        callback();
    }, 4000);
}

function getStudents2(){
    let str = '';
    setTimeout(function(){
        students.forEach(function(student){
            str += `<li> ${student.name} has ${student.subject} </li>`;
        });
        document.getElementById('students-list2').innerHTML = str;
    },1000)
}

enrollStudent2(student2, getStudents2);
enrollStudent2(student3, getStudents2);
// getStudents2(); needs not be called seperately


{ //useless now

    {
        let factorial = (n) => {
            for(let i = n-1 ; i > 0; i--){
                n = n*i;
            }
            return n;
        }

        function nCr(n, r, fact){
            let answer = fact(n) / ( fact(r) * fact(n-r) );
            return answer;
        }

        let ans  = nCr(8, 4, factorial);
        console.log(ans);

    }
    {
        function abc(a,b,callbackFunction){
            callbackFunction(a,b);
        }
        
        function sum(a,b){
            console.log(a+b);
        }
        function difference(a,b){
            console.log( Math.abs(a-b) );
        }

        function product(a,b){
            console.log(a*b);
        }

        function powers(a,b){
            console.log(`a^b = ${Math.pow(a,b)} and b^a = ${Math.pow(b,a)}`);
        }

        function division(a,b){
            console.log(`a/b = ${a/b} and b/a = ${b/a}`);
        }

        abc(8,6,sum);
        abc(8,6,difference);
        abc(8,6,product);
        abc(8,6,powers);
        abc(8,6,division);

    }
    {
        function runAfterTime(message, timeInSeconds){
            timeInSeconds *= 1000;
            setTimeout(function(){
                console.log(message);
                console.log(`user defined lag successful by ${timeInSeconds/1000} seconds`)
            }, timeInSeconds);
        }

        let message = 'Testing user defined lag';
        message = 'in 1 sec and it messed up because when we got te lst new student was still enrolling and could not get his name printed so we had 2 options';
        message = 'either calling getStudents() after 3 sec (may be 3.001 sec)'
        runAfterTime(message.toUpperCase(), 5);
    }
}