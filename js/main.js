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


//Chose Font Size
document.getElementById("sliderRange").oninput = function () {fontSize()};

function fontSize(){
    let fontLength = document.getElementById("sliderRange").value;
    document.getElementById("teeText").style.fontSize = fontLength + "px";
}

//Add to Cart
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
    }
}