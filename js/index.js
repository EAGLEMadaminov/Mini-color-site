const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * (4 - 1 + 1));
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
