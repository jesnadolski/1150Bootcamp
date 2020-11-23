/* WEEK TWO CHALLENGE

Fizz Buzz
*/

//FIRST ATTEMPT _ No go

let FB=15;

if (FB % 3==true){
    console.log('FIZZ');
}
else if (FB % 5==true){
    console.log('BUZZ');
}
else if (FB % 3 ==true && FB % 5 ==true){
    console.log('FIZZ BUZZ');
}




//Second attempt - WORKED!
let FB =Math.floor(Math.random() * 100);
    //the % gives us a remainder - so we are looking for a remainder of zero to get if it is divisible
    //should list the strictist first - so the first condition should be the 3 AND 5 - opposite of what I have

    if (FB % 3==0){
        console.log(`FIZZ  ${FB}`);
    }
    else if (FB % 5 ==0){
        console.log(`BUZZ  ${FB}`);
    }
    else if (FB % 3 ==0 && FB % 5 ==0){
        console.log(`FIZZ BUZZ  ${FB}`);
    }


    //SILVER - convert this to a switch statement  - My attempt

let FB = Math.floor(Math.random() *100);

    switch(FB){
        case 'FIZZ':
        console.log(`${FB} = FIZZ`);
        break:        
        case 'BUZZ':
        console.log(`${FB} = BUZZ`);
        break:
        case 'FIZZ BUZZ':
        console.log(`${FB} = FIZZ BUZZ`);
        break:
        default:
            console.log('Are You a Number?');
    } 

//SILVER - INSTRUCTOR
//switches must be true or false

let FB =3;

let isDivisibleBy5and3 = FB % 3==0 && FB % 5 ==0;
let isDivisibleBy5 = FB % 5 ==0;
let isDivisibleBy3 = FB % 3 ==0;
console.log(isDivisibleBy5and3);

let FB=15;

switch(true){
    case FB % 3==0 && FB % 5 ==0:
        console.log('FIZZ BUZZ');
        break;
    case FB % 5 ==0:
        console.log('FIZZ');
        break;
    case FB % 3 ==0:
            console.log('BUZZ');
            break;
            default:
                console.log('Not a Fizz or a Buzz');
}