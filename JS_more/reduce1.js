console.log("reduce tut1.js");

const array1 = [2,5,8,11,14,17,20];
{
    /// tut 1 start

    console.log([1,2,3,4,5].reduce( (accumulator, currentValue) => {return accumulator + currentValue}, 14) );

    
    const reducerFunction = (accumulator, currentValue) => {return accumulator + currentValue};
    
    // array.reduce(reducerFunction, initialValue);
    
    const sum1 = array1.reduce(reducerFunction);
    console.log(sum1);
    
    const initialValue = 45;
    const sum2 = array1.reduce(reducerFunction, initialValue);
    console.log(sum2);

    // console.log("Another way to write");

    console.log( [3, 7, 11, 15, 19, 23, 27].reduce(reducerFunction, 0,  [3, 7, 11, 15, 19, 23, 27]) , "with initial value = 0");

    console.log( [3, 7, 11, 15, 19, 23, 27].reduce(reducerFunction, 23, [3, 7, 11, 15, 19, 23, 27]), "array given inside" );

    console.log( [3, 7, 11, 15, 19, 23, 27].reduce(reducerFunction, 23), "array not given inside" );
    
    /// tut 1 ends
}

{
    /// tut 2 begins
    const array1 = [34, 25, 122, 65, 98, 6, 14, 93, 106];

    const getMax = (a,b) => Math.max(a,b);
    const getMax2 = (accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue;

    const m1 = array1.reduce(getMax);
    const m2 = array1.reduce(getMax, 43);
    const m3 = array1.reduce(getMax, 413);
    
    const m12 = array1.reduce(getMax2); 
    const m22 = array1.reduce(getMax2, 43);
    const m32 = array1.reduce(getMax2, 413);

    console.log(m1, "--m1", m2, "--m2", m3, "--m3");
    console.log(m12, "--m12", m22, "--m22", m32, "--m32");

    /// tut 2 ends
}

{
    // tut 3 starts

    const toFlatten =  [[0, 1], [2, 3], [4, 5]];

    const reducerFunction = (accumulator, currentValue) => accumulator.concat(currentValue);
    
    const flattenedArray =  toFlatten.reduce(reducerFunction, []);
    // [].concat([0,1]) = [0,1]; [0, 1].concat([2,3])  = [0,1,2,3]
    console.log(flattenedArray);
    // tut 3 ends
}

{
    // tut 4 starts

    const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
    
    const countedNames = names.reduce((allNames, name) => {
        const currentCount = allNames[name] ?? 0;
        return {
            ...allNames,
            [name] : currentCount + 1
        };
    }, {});
    console.log(countedNames);

    // tut 4 ends
}

{
    // tut 5 starts

    const people = [
        {name : "Alice", age: 23, inPocket: 450},
        {name: "Bob", age: 22, inPocket: 550},
        {name: "John", age: 22, inPocket: 450},
        {name: "Jane", age: 24, inPocket: 550},
        {name: "Max", age: 24, inPocket: 650},
        {name: "Molly", age: 22, inPocket: 750},
        {name: "Selena", age: 23, inPocket: 150},
        {name: "Taylor", age: 22, inPocket: 550},
    ];


    let ageArray = people.reduce((ageCollection, person) => {
        // debugger;
        if(!ageCollection.includes(person.age))
            return [...ageCollection, person.age];
        else
            return ageCollection;
    }, []);

    ageArray = ageArray.sort((a, b) => a-b);
    console.log(ageArray);

    // ageArray -- done

    function groupBy(targetObject, property){
        // take any target array and the target property
        return targetObject.reduce((accumulator, person) => {
            // key is  the property ex: age in this example
            const key = person[property];
            const currentGroup = accumulator[key] ?? [];

            return { ...accumulator, [key] : [...currentGroup, person["name"]]}
        }, {});
    }

    const groupedPeopleByAge = groupBy(people, "age");
    const groupedPeopleByInPocket = groupBy(people, "inPocket");

    console.log(groupedPeopleByAge);
    console.log(groupedPeopleByInPocket);

    // tut 5 starts
}

{
    // tut 6 starts

    const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
    const noDuplicates = Array.from(new Set(myArray));
    console.log(noDuplicates.sort());

    // using reduce()

    const noDuplicates2 = myArray.reduce((accumulator, currentValue) => {
        if(!accumulator.includes(currentValue))
            return [...accumulator, currentValue];
        else
            return accumulator;
    }, []);

    console.log(noDuplicates2);

    // tut 6 ends
}