
//Initialize with the list of symbols
let healthIssues = ["Anxiety","Gastroesophageal reflux with esophagitis","Asthma","Diabetes","High blood pressure",
"Migraine headaches","Depression","Hypertension","PCOD (Polycystic Ovary Disease)"]
healthIssues.sort();

//Find the input search box
let search = document.getElementById("search")

//Find every item inside the dropdown
let id = document.getElementById("menu_Items")
let items = id.getElementsByClassName("dropdown-item")

function buildDropDown(values) {
    let contents = []
    for (let healthIssues of values) {
    contents.push('<input type="button" class="dropdown-item" type="button" value="' + healthIssues + '"/>')
    }
    $('#menu_Items').append(contents.join(""))

    //Hide the row that shows no items were found
    $('#empty').hide()
}

//Capture the event when user types into the search box
window.addEventListener('input', function () {
    filter(search.value.trim().toLowerCase())
})

//For every word entered by the user, check if the symbol starts with that word
//If it does show the symbol, else hide it
function filter(word) {
    let length = items.length
    let collection = []
    let hidden = 0
    for (let i = 0; i < length; i++) {
    if (items[i].value.toLowerCase().startsWith(word)) {
        $(items[i]).show()
    }
    else {
        $(items[i]).hide()
        hidden++
    }
    }

    //If all items are hidden, show the empty view
    if (hidden === length) {
    $('#empty').show()
    }
    else {
    $('#empty').hide()
    }
}


$('#menu_Items').hide();

//If the user clicks on any item, set the title of the button as the text of the item
$('#menu_Items').on('click', '.dropdown-item', function(){
    search.value=$(this)[0].value;
    console.log(search.value);
    $('#menu_Items').hide();

});

search.addEventListener('focus', function(){
  id.classList.add("onFocus");
  id.classList.remove("blurred"); 
  menuItemsDisplay("onFocus");   
});

search.addEventListener('blur', function(){
  id.classList.add("blurred");
  id.classList.remove("onFocus");
});

function menuItemsDisplay(status){
    if(status==="onFocus"){
        $('#menu_Items').show();
    }
    else if(status==="blurred"){
        $('#menu_Items').hide();
    }
}


buildDropDown(healthIssues);


