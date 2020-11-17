//SCOPE

//What is Scope?

//Javascript has both LOCAL and GLOBAL scope

//functions are tools 

var x=12;

function scope(){
    var x=33;
    var y=10;
    console.log(x);
}
scope();  //produces 33
console.log(x);  //produces 12
console.log(y); //won't work


//example 2

var x=12;

function scope(){
    x=33;
    console.log(x);
}

scope()   //produces 33
console.log(x);  //produces 33


//example 3 - more scope - inner scope and inner most scope

var x=1;

function scope(){
    var x=2;
    function scopeInner(){
        var x=3;
        console.log(x);  //this is the first log that gets run
    }
    scopeInner();   //now this calls the inner scope and then x (set to 2)
    console.log(x);
}
scope();
console.log(x);  //calls the global = 1


//example 4

var x=12;

function scope(){
    x=33;
    if (true){
        let x=45;
        console.log(x);   //the first log - runs the inner most
    }
    console.log(x);    //runs the outer scope
}

scope();
console.log(x);  //runs the global x


//example 5

var x=12;

function scope(){
    var x=33;
    if (true){
        var x=45;
        console.log(x);  //runs 45
    }
    console.log(x);  //runs 45 - var does not obey 'block' scope - will treat it all as the same scope
}

scope();
console.log(x);

