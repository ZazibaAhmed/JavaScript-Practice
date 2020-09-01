
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");


function blue(){
	addListAfterClick("lightskyblue");
}
function green(){
	addListAfterClick("palegreen");
}
function yellow(){
	addListAfterClick("yellow");
}
function red(){
	addListAfterClick("tomato");
}


function inputLength() {
	return input.value.length;
}

function createListElement(bgcolor) {

	//Editing could have been done with contenteditable as well

	var textarea = document.createElement("textarea");
	textarea.appendChild(document.createTextNode((input.value)+"  "));
	textarea.style.backgroundColor=bgcolor;
	var li = document.createElement("li");
	li.appendChild(textarea);
	ul.appendChild(li);
	input.value = "";
	list = document.querySelectorAll("li");
	console.log("Done");
 
    addButton(li);
}

function addListAfterClick(bgcolor) {
	if (inputLength() > 0) {
		createListElement(bgcolor);
	}
}


function addButton(textarea){
	var btn = document.createElement("BUTTON");
	btn.appendChild(document.createTextNode("Delete"));
	btn.setAttribute("class","delete");
	textarea.appendChild(btn);	
}


//button.addEventListener("click", addListAfterClick);


ul.onclick = function(event){
    var target = event.target;

    if(target.tagName==="BUTTON"){
    console.log(target.className);
    console.log(target.parentElement.textContent);
    target.parentElement.remove();
      
    }

    else{   	
     target.classList.toggle("done");
    }
}; 









