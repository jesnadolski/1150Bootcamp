// var lotto = [];

// for (i=0; i<=4; i++){
//     let randomNumber = Math.floor(Math.random() * 49) +1;
//     lotto.push(randomNumber);
//     lotto.sort(function(a, b){return a - b});
// }
// console.log(lotto);




// var lotto = [];
// let randomNumber = Math.floor(Math.random() * 49) +1;
// lotto.push(randomNumber);
// for(i=0; i<=4; i++){
//     let randomNumber = Math.floor(Math.random() * 49) +1;
//     while (lotto.lastIndexOf(randomNumber) !== randomNumber){
//         randomNumber = Math.floor(Math.random() * 49) +1;
//     }
//     lotto.push(randomNumber);
// };
// console.log(lotto);





const generate = () => {
    let arrayContainer = []; 
    let displayContainer = document.getElementById('array');
    const genNum = Math.floor(Math.random() * 30);
    arrayContainer.push(genNum);
    for (let counter = 0; counter < 10; counter++) { 
        let newGen = Math.floor(Math.random() * 30);
        while (arrayContainer.lastIndexOf(newGen) !== -1) {
            newGen = Math.floor(Math.random() * 30);
        }
        arrayContainer.push(newGen);
    };
    console.log(arrayContainer);