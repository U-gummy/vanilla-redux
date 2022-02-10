const ADD = document.getElementById("add");
const MINUS = document.getElementById("minus");
const NUMBER = document.querySelector("span");

let count = 0;
NUMBER.innerText = count;

const updateText = () => {
  NUMBER.innerText = count;
}

const handleAdd = () => {
  count++;
  updateText();
}

const handleMinus = () => {
  count--;
  updateText();
}

ADD.addEventListener("click", handleAdd);
MINUS.addEventListener("click", handleMinus);