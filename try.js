
let convertToKeyValuePair = (someKey,someValue)=>{

    // this function should return a single object which has 
    //key as the value of someKey and value as someValue
    return {someKey:someValue};

};
let obj = convertToKeyValuePair("Name","Sukrit");
console.log(obj);
/*

Complete function that convertTemplate() which takes rest parameters as input 
and returns a concatenated string as input irrespective of the 
data type passed as argument to the function.

sample input - convertTemplate('aa',3)
output : aa3






let convertTemplate = (...input)=>{
   // start your code here.
    return input;
};

*/

/*let a = [5,12];
let b = ["Abc",56];
let c = [...a,...b];

console.log(c);*/