
var quotes=['You only live once(YOLO)',
'Pooja, what is this behaviour -Big Boss',
'That\'s what she said - Michael Scott',
'My name\'s Jeff - Channing Tatum',
'Kuch kuch hota hain Rahul, Tum nehi samjhoge - Anjali',
'Make friends first, make sales second, make love third. In no particular order - Michael Scott',
'Let\'s get lit - Albert Einstein',
'Wow, what a time to be alive -Gandhi',
'Happy Birthday to you - Ranbindranath Tagore',
'Pivot! -Ross Geller',
'Luke, I am your father!-Darth Vader',
'My name is Khan and I\'m not a terrorist - SRK',
'I have a great relationship with the Blacks - Donald Trump',
'They see me rollin, they hatin- Mother Teresa',
'Chup koro!Beyadop kothakar- Khaleda Zia',
'Kuch kuch hota hain Rahul, Tum nehi samjhoge - Anjali']

function blue(){
	var randomNumber= Math.floor(Math.random()*(quotes.length));
	document.getElementById('revealQuote').innerHTML=quotes[randomNumber];
	document.getElementById('revealQuote').style.borderColor = "navy";
	document.getElementById('revealQuote').style.backgroundColor="lightskyblue";
	document.getElementById('revealQuote').style.color="navy";
	document.getElementById('revealQuote').style.fontFamily="Barriecito";
	document.getElementById('revealQuote').style.fontSize="25px";

	
}
function green(){
	var randomNumber= Math.floor(Math.random()*(quotes.length));
	document.getElementById('revealQuote').innerHTML=quotes[randomNumber];
    document.getElementById('revealQuote').style.borderColor = "teal";
    document.getElementById('revealQuote').style.backgroundColor="palegreen";
	document.getElementById('revealQuote').style.color="teal";
	document.getElementById('revealQuote').style.fontFamily="Mansalva";
	document.getElementById('revealQuote').style.fontSize="23px";
	
}
function yellow(){
	var randomNumber= Math.floor(Math.random()*(quotes.length));
	document.getElementById('revealQuote').innerHTML=quotes[randomNumber];
    document.getElementById('revealQuote').style.borderColor = "orange";
    document.getElementById('revealQuote').style.backgroundColor="yellow";
	document.getElementById('revealQuote').style.color="orange";
	document.getElementById('revealQuote').style.fontFamily="Rubik";
	document.getElementById('revealQuote').style.fontSize="23px";
}
function red(){
	var randomNumber= Math.floor(Math.random()*(quotes.length));
	document.getElementById('revealQuote').innerHTML=quotes[randomNumber];
    document.getElementById('revealQuote').style.borderColor = "maroon";
    document.getElementById('revealQuote').style.backgroundColor="tomato";
	document.getElementById('revealQuote').style.color="white";
	document.getElementById('revealQuote').style.fontFamily="Bold";
	document.getElementById('revealQuote').style.fontSize="27px";
}
