// Add invalid indicators to text input 
function tooManyCharacters(){
    let inputString = document.getElementById("inputText").value;
    // Add font to tee preview
    document.getElementById("teeText").innerHTML = inputString;
    if (inputString.length > 20) {
        //add Bootstrap class of is-invalid
        document.getElementById("inputText").classList.add("is-invalid");
        document.getElementById("alert").style.color = "red";
    }
    else{
        //remove Bootstrap class of is-invalid
        document.getElementById("inputText").classList.remove("is-invalid");
        document.getElementById("alert").style.color = "black";
        document.getElementById("textRequired").innerHTML = "";
    }
}

document.getElementById("inputText").onkeyup = function () {tooManyCharacters()};

//Chose Font
   var ChooseFont = function (font) {
        document.getElementById("teeText").style.fontFamily= font.value;
    }

//Chose Font Size
document.getElementById("sliderRange").oninput = function () {fontSize()};

function fontSize(){
    let fontLength = document.getElementById("sliderRange").value;
    document.getElementById("teeText").style.fontSize = fontLength + "px";
}


// color changer
// change font to black
document.getElementById('black').addEventListener('click', function(){
    document.getElementById('teeText').style.color='black';
})
// change font to blue
document.getElementById('blue').addEventListener('click', function(){
    document.getElementById('teeText').style.color='blue';
})
// change font to green
document.getElementById('green').addEventListener('click', function(){
    document.getElementById('teeText').style.color='green';
})
// change font to red
document.getElementById('red').addEventListener('click', function(){
    document.getElementById('teeText').style.color='red';
})


//Add to Cart
let counter = 0;
let basePrice = 20;
const tax = .095;
let total = 0;
let subtotal = 0;

document.getElementById("addButton").onclick = function () {addCart()};

function addCart(){
    let inputText = document.getElementById("inputText").value;
    let warning = "";
    if (inputText.length == 0) {
        document.getElementById("inputText").classList.add("is-invalid");
        warning = "Text is required";
        document.getElementById("textRequired").innerHTML = warning;
    }
    else if(inputText.length > 20){
        warning = "Text cannot be longer than 20 characters";
        document.getElementById("textRequired").innerHTML = warning;
    }
    else{
        document.getElementById("textRequired").innerHTML = "";
        document.getElementById("customTee").classList.remove("d-none");
        document.getElementById("emptyCart").classList.add("d-none");

        counter++;
        subtotal = counter * basePrice;

        document.getElementById("shirtQuantity").innerHTML = counter + " x $20.00";
        document.getElementById("subtotal").innerHTML = "$" + (subtotal).toFixed(2);
        document.getElementById("tax").innerHTML = "$" + (subtotal * tax).toFixed(2);
        document.getElementById("total").innerHTML = "$" + (subtotal * 1.095).toFixed(2);
    }
}

//remove cart
document.getElementById("emptyButton").onclick = function () {emptyCart()};

function emptyCart(){
    document.getElementById("customTee").classList.add("d-none");
    document.getElementById("emptyCart").classList.remove("d-none");
    document.getElementById("shirtQuantity").innerHTML = "";

    document.getElementById("subtotal").innerHTML = "$0.00";
    document.getElementById("tax").innerHTML = "$0.00"; 
    document.getElementById("total").innerHTML = "$0.00";
}