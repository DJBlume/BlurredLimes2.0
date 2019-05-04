var getStarted = document.getElementById("formButton");//grab "get started" button
var addIngredient = document.getElementById("addIngredient");


getStarted.addEventListener("click", function(){ //add click listener to "get started" button
    var display = document.getElementById("form");
    display.classList.toggle("display"); //toggle class that displays the form  
});

addIngredient.addEventListener("click", function(){
    var newLi = document.createElement('li');
    var newInput = document.createElement('input');
    var ingredient = document.createTextNode('Ingredient: ');
    
    newLi.appendChild(ingredient);
	newLi.appendChild(newInput);
	
	var position = document.getElementById('list');
	
	position.appendChild(newLi);
	
});
