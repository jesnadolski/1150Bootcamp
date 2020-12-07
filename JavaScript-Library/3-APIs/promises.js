//setTimeout(() => console.log('this is a test of timeouts!'), 1000);
//number in milliseconds ms

//PROMISES

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (true){
            resolve('success');
        }
        else {
            reject('failure');
        }
    }, 3000);
})
//you are saying you want a new version of the thing that follows it

promise
.then(success => console.log(success));
.catch(err => console.log(err));

//promises allow this part of your code to wait while the rest of the code runs from top to bottom
