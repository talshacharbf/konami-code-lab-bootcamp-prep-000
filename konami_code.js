const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
let index = 0;
const key = parseInt(e.keydown);
 
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}// Write your JavaScript code inside the init() function

}