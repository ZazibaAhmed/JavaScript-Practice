
 function ClearIt(){
    
    var textArea = document.getElementById("text");
    var arrayOfLines = textArea.value.split("\n");
    
    for (var i = 0; i < arrayOfLines.length; i++) {
        
            textArea.value = "";
        
    }
}
 

 function Capitalize(){
  var textArea = document.getElementById("text");
  var arrayOfLines = textArea.value.split("\n");
  var char0=(textArea.value).charAt(0);
  var char1=(textArea.value).charAt(1);
    if((char0==char0.toLowerCase())||(char1==char1.toLowerCase())){
    //for (var i = 0; i < arrayOfLines.length; i++) {
            textArea.value=(textArea.value).toUpperCase();
        
    //}
     }
     else{
      textArea.value=(textArea.value).toLowerCase();
     }
 }

 
 function Sort(){
    var textArea = document.getElementById("text");
    var arrayOfLines = textArea.value.split("\n");
    arrayOfLines.sort();
    textArea.value =arrayOfLines.join("\n");
 }

 function Reverse(){

  function wordsReverser(string){
      return string.split(' ').reverse().join(' ');
  }
  var textArea = document.getElementById("text");
  var arrayOfLines = textArea.value.split("\n");
  for (var i = 0; i < arrayOfLines.length; i++) {
      arrayOfLines[i]=wordsReverser(arrayOfLines[i]);
   }
   textArea.value = arrayOfLines.join("\n");
  }

 
 function StripBlank(){
  var textArea = document.getElementById("text");
  var arrayOfLines = textArea.value.split("\n");
  var filtered = arrayOfLines.filter(Boolean);
    for (var i = 0; i < arrayOfLines.length; i++) {
        
            textArea.value = filtered.join("\n");
        
    }
 }

 function AddNumbers(){
    var textArea = document.getElementById("text");
    var arrayOfLines = textArea.value.split("\n");
    
    for (var i = 0; i < arrayOfLines.length; i++) {
        
            arrayOfLines[i] =(i+1)+". "+arrayOfLines[i];
    }
       textArea.value =arrayOfLines.join("\n");
 }

function Shuffle() {
  var textArea = document.getElementById("text");
  var array = textArea.value.split("\n");
  //var j=0;
  //var temp=0;
  // var currentIndex = array.length, temporaryValue, randomIndex;

  // // While there remain elements to shuffle...
  // while (0 !== currentIndex) {

  //   // Pick a remaining element...
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex -= 1;

  //   // And swap it with the current element.
  //   temporaryValue = array[currentIndex];
  //   array[currentIndex] = array[randomIndex];
  //   array[randomIndex] = temporaryValue;
  var j,x,i=0,len=array.length;
  for(i;i<len;i++){
    j=Math.floor(Math.random()*len);
    x=array[i];
    array[i]=array[j];
    array[j]=x;
  }

  textArea.value =array.join("\n");

}

 

 