var r = 0; // This variable has global scope
var g = 0;
var b = 0;



function rgb(elem) {
  const name = elem.name; //This varible has block scope
  let val = elem.value;
  window[name] = val;
  document.getElementById("id1").style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

var input = 'Input Box' // This is the string variable of the title of the input box
console.log (r, g, b );
console.log (input);
