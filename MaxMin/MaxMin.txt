
 function myFunction(){
    
 	var inputs=document.getElementById("input").value;
    var num = inputs.split(',');
    document.getElementById("max").value = max(num); 
    document.getElementById("min").value = min(num);
 	document.getElementById("sum").value = sum(num); 
 	document.getElementById("avg").value = average(num);
 	document.getElementById("reverse").value = reverseOrder(num);
 }

 function max(array){
  return Math.max.apply(Math, array);
 }
 

 function min(array){
  return Math.min.apply(Math, array);;
 }
 
 function sum(array){
  var sum = 0;
  var count = array.length;
  for (var i = 0; i < count; i++) {
    sum = sum + Number(array[i]);
  }
  return sum;
 }
 
 function average(array){
  var sum = 0;
  var count = array.length;
  for (var i = 0; i < count; i++) {
    sum = sum + Number(array[i]);
  }
  return sum / count;
 }
 
 function reverseOrder(array){
  var new_arr = array.reverse();
  return new_arr;
 }

 
 
