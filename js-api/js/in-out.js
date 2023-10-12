// console.log(fruits.innerText);
// console.log(fruits.innerHTML);

// console.log(userInput);
// output.innerText = "si thu hein"

// console.dir(output);
// userInput.value = "hello"

// output.innerText = "something"

const userInput = document.getElementById("userInput");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const fruits = document.getElementById("fruits")
const salary = document.getElementById("salary")
const birthDate = document.getElementById("birthDate")
const profilePic = document.getElementById("profilePic")

output.innerHTML = "hello <a href='#'>link</a>"

function run() {
  let text = userInput.value;
  output.innerText = text;
  userInput.value = null;
}

btn.addEventListener("click",run)
