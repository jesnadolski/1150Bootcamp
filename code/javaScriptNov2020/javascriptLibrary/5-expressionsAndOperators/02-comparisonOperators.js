//Comparison Operators

//equality comparison operator


console.log('3'==3);
console.log(4==4);
console.log(3=='4');
//types and values are different in the last example - cannot compare

//strict equality comparison operator

console.log(3===3);
console.log('3'===3);

//not equal comparison operator
console.log('3'!=4);
console.log('3'!=3);
//the second example is false because it recognizes that string 3 IS EQUAL to number 3 - and this is a not equal operator

//strict not equal comparison operator

console.log('3'!==3);
console.log(3!==3);
//the triple inequality cares about type AND value

//greater than operator
console.log(3>2);
console.log(2>3);

//less than operator
console.log(2<3);
console.log(3<2);

//greater than or equal to
console.log(3>=2);
console.log(3>=3);

//less than equal to
console.log(2<=3);
console.log(3<=2);


//And (both expressions on either side of the operator must be true for 'AND' to return true

console.log(1<2 && 3>0);
console.log(2<1 && 3>0);

//Or (either expression on one side of the operator must be true for the 'OR' operator to return true)

console.log(1<2 || 3<0);
console.log(2<1 || 3<0);


let obj= {key: 'test'}
console.log(obj=={key:'test'});

console.log(obj==obj);

let arr=[1,2,3,4];
console.log(arr==[1,2,3,4]);
console.log(arr==arr);


