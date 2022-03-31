// Add invalid indicators to text input 
function tooManyCharacters(){
    let inputString = document.getElementById("inputText").value;
    console.log(inputString);
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

