var r = 255; // This variable has global scope
var g = 255;
var b = 255;
console.log (r, g, b );


function rgb(elem) {
  let name = elem.name; //This varible has block scope
  var val = elem.value;
  window[name] = val;
  document.getElementById("input").style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function randomColor() {
    var r = Math.floor(Math.random() * 255); // mathematical operation to generate random color
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";  
    console.log(randomColor);
    document.getElementById("input").style.backgroundColor = randomColor
  }

  const product = {type: "Apple phone, " , model:"iPhone 15"  } // This is the object variable
document.getElementById("phone").innerHTML = "Product is an " + product.type + product.model;

var input = 'Text Box' // This is the string variable of the title of the input box
document.write(input)
console.log (input);
