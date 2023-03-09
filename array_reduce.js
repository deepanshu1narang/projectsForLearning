// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

const names = ["Naruto", "Alice", "Bob", "Tiff", "Bruce", "Alice", "Tiff", "Tiff", "Naruto"];

function counting(array){
    let newArray = [];
    let newObject = {};
    for(let e of array){
        if(newArray.includes(e)){
            newObject[e] = newObject[e] + 1;
        }
        else{
            newArray.push(e);
            newObject[e] = 1;
        }
    }
    return newObject;
}

const countPerName = counting(names);
console.log(countPerName);


// ///////////////////// using reducers /////////

function reducerFunc(accumulatedNames, currentName){
    // accumulatedNames[currentName] ? accumulatedNames[currentName] += 1 : accumulatedNames[currentName] = 1;
    // return accumulatedNames;
    const currentCount = accumulatedNames[currentName] ? accumulatedNames[currentName] : 0;
    return {
        ...accumulatedNames, 
        [currentName]: currentCount + 1
    }
}

const countPerName2 = names.reduce(reducerFunc, {});
console.log(countPerName2);

function reducerFunc2(allNames, name){
    const currCount = allNames[name] ? allNames[name] : 0;
    return {
        ...allNames,
        [name]: currCount + 1,
  };
}

const countPerName3 = names.reduce(reducerFunc2, {});
console.log(countPerName3);


const people = [
  { name: "Alice", age: 21 },
  { name: "Sasuke", age: 25},
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Joe", age: 21 },
  { name: "Ino", age: 22 },
  { name: "Udon", age: 25},
  { name: "Sai", age: 23 },
  { name: "Gon", age: 20 },
  { name: "Eren", age: 22 },
  { name: "Jean", age: 23 },
];

function groupBy(infoArray, property){
    return infoArray.reduce(function(accumulator, currentValue){
        const key = currentValue[property];
        const currentGroup = accumulator[key] ? accumulator[key] : [];
        
        return {
            ...accumulator,
            [key]: [...currentGroup, currentValue]
        }
    }, {});
}

const groupByAge = groupBy(people, "age");
console.log(groupByAge);


/////////////////////////////////////////////

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
  {
      name: "Jiraya",
      books: ["The Tail of a Gutsy Ninja", "icha icha 1", "icha icha 2", "icha icha 3" ],
      age: 26
  },
  {
      name: "Naruto",
      books: ["The Tail of Naruto Uzumaki", "Broken face of otsusuki", "Bayron Mode"],
      age: 33
  },
  {
      name: "Chopper",
      books: ["Medicinal Practices by Doctorine", "Medicines by blue nosed reindeer",],
      age: 17
  }
];

// [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

const booksList = friends.map(f => f.books).flat(Infinity);
booksList.unshift('Alphabet');
console.log(booksList);

function collection(infoSourceArray, collectionOf){
    let arr1 = infoSourceArray.map(i => i[collectionOf]);

    return arr1.reduce( (accumulatedList, currentValue) => {
        // return [...accumulatedList, currentValue]
        return accumulatedList.concat(currentValue);
    }, ["Alphabet"])
}

const booksList2 = collection(friends, "books");
console.log(booksList2);

const booksList3 = friends.reduce( function(accumulator, currentValue){
    return [...accumulator, ...currentValue.books];
}, ["Alphabet"] );
console.log(booksList3);




////////////////////// no duplicates //////////////

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const uniqueArray = myArray.reduce( (accumulator, currentValue) => {
    if(!accumulator.includes(currentValue))
        return [...accumulator, currentValue];
    return accumulator;
}, []);

console.log(uniqueArray);
