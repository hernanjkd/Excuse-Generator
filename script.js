let who  = ['The dog', 'My grandma', 'His turtle', ' My bird'];
let what = ['ate', 'pissed', 'crushed', 'broke'];
let when = ['before the class.', 'right in time.', 'when I finished.',
						'during lunch.', 'while I was praying.'];

//Picks a random number from 0 to range
function getRandom(range){
	return Math.floor( Math.random() * range );
}

function createExcuse(){
	var s = who[ getRandom(4) ] + ' ' + what[ getRandom(4) ] +
						' my homework ' + when[ getRandom(5) ];
	document.getElementById("excuse").innerHTML = s;
}