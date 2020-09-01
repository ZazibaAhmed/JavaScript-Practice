var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode((input.value)+"  "));
	ul.appendChild(li);
	input.value = "";
	list = document.querySelectorAll("li");
	console.log("Done");
 
    addButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addButton(li){
	var btn = document.createElement("BUTTON");
	btn.appendChild(document.createTextNode("Delete"));
	btn.setAttribute("class","delete");
	li.appendChild(btn);	
}

function Delete(){
	//var myobj = document.getElementById("demo");
	console.log(this);
    this.remove();
	//var elem = document.querySelectorAll('ul');
    //elem.removeChild(elem);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

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









