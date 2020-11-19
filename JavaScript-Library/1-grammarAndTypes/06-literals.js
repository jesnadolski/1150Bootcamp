/*
LITERALS

*/

let weekdays=['monday', 'tuesday','wednesday','thursday','friday'];
console.log(weekdays.toString());  //creates a string - rather than seeing the [array]

console.log(weekdays[3]);

let soup={
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley',
};
console.log(soup.c);   //to call the key named 'c'

//array and object literals can hold primitive and complex types - arrays, objects, functions

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiter = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3],
obj: {key: 'test'}, func: function(){return 'yes'}};
console.log(complexObjLiter.func);
console.log(complexObjLiter.arr);

