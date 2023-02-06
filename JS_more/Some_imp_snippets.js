// To get an array of all unique elements
let arr = [1,2,5,3,2,4,2,1,4,2,5,6,7,8,3,6,4,9];
let arr2 = Array.from(new Set(arr))

// To get an array of all unique elements if all the alements inside ara objects (cam't use this methid coz they make different references)
let Ar = [{type:"a"}, {type:"c"}, {type:"a"}, {type:"b"}, {type:"b"}, {type:"c"}, {type:"a"}, {type:"a"}, {type:"e"}, {type:"f"}, {type:"f"}, {type:"a"}, {type:"f"}, {type:"b"}, {type:"n"}, {type:"m"}, {type:"n"}, {type: ""}];
console.log(JSON.stringify(Ar), ">>> stingified(Ar)")
let unique = new Set(Ar.map(e => JSON.stringify(e)));
let uniqueAr = Array.from(unique).map(e => JSON.parse(e));

console.log(unique, ">>> uniqe values");
console.log(uniqueAr, ">>> arrray with unique object elements");
