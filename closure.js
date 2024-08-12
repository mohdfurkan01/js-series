// document.getElementById("blue").onclick = function () {
//   document.body.style.backgroundColor = `blue`;
// };

// document.getElementById("green").onclick = function () {
//   document.body.style.backgroundColor = `green`;
// };

//Not a good way

function clickHandler(color) {
  //this fun has a ref of outside color
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}
document.getElementById("blue").onclick = clickHandler("blue");
document.getElementById("green").onclick = clickHandler("green");
