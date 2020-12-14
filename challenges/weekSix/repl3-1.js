


// function userInput(){
  
//     let storeName = document.getElementById("store")[0].value;
//     let productName = document.getElementById("product");
//     let quant = document.getElementById("quantity");

//     document.getElementById("display").addEventListener("click", function(e){
//         event.preventDefault();
//     });

//   console.log(`I shopped at ${storeName} for ${quant} ${productName}`);




// };


//   let userInput = document.getElementById("display");
//   userInput.innerHTML += `testing ${store}`;



function userInput(event){
    event.preventDefault();

    let storeName = document.getElementById("store");
        let productName = document.getElementById("product");
        let quant = document.getElementById("quantity");

    console.log(storeName.value);
    console.log(productName.value);
    console.log(quantity.value);

    console.log(`I shopped at ${storeName.value} for ${quant.value} ${productName.value}`);

    let display = document.createElement("p");
    display.innerText = `I shopped at ${storeName.value} for ${quant.value} ${productName.value}.`;
    document.body.appendChild(display);
    
};



