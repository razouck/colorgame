
function rp()
{
	return Math.floor(Math.random() * 101);
}

var red, green, blue;
var r, g, b;
var created_color;
var random_color = `rgb(${rp()}%, ${rp()}%, ${rp()}%)`;

var div = document.querySelector('.color');
var random = document.querySelector('.random');

function chc()
{
	[r, g, b] = [red.value, green.value, blue.value];
	
	div.style.backgroundColor = created_color = `rgb(${r}%, ${g}%, ${b}%)`;
	
	if (created_color == random_color) alert('wow.'); // *
}

[red, green, blue] = ['red', 'green', 'blue'].map(id => document.getElementById(id));
[red, green, blue].forEach( e => e.addEventListener('input', chc) );
random.style.backgroundColor = random_color;

console.log(random_color);

// TODO
// add some sort of visual feedback for the colors that are being changed
// make the sliders more fun, i guess...
// add an appealing like "Train your artist eye" or something like that...
// add a punctuation system?
// do something more fun for the line marked with a *

