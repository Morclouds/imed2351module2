var r = 255; // This variable has global scope
var g = 255;
var b = 255;
console.log (r, g, b );


function rgb(elem) {
  let name = elem.name; //This varible has block scope
  let val = elem.value;
  window[name] = val;
  document.getElementById("input").style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function randomColor() {
    var r = Math.floor(Math.random() * 255); //
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";  
    console.log(randomColor);
    document.getElementById("input").style.backgroundColor = randomColor
  }
  
 

var input = 'Input Box' // This is the string variable of the title of the input box

console.log (input);
