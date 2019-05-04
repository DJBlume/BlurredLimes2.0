var getStarted = document.getElementById("formButton")//grab "get started" button
var addIngredient = document.getElementById("addIngredient")

getStarted.addEventListener("click", function(){ //add click listener to "get started" button
    var display = document.getElementById("form");
    display.classList.toggle("display"); //toggle class that displays the form  
});

addIngredient.addEventListener("click", function(){
    
});