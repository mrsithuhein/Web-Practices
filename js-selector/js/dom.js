const el1 = document.createElement("h1");
el1.innerText = "hello world";
// el1.style.color = "blue";
// el1.style.backgroundColor = "black";
// el1.style.padding = "20px";

el1.classList.add("text-primary", "bg-primary-subtle", "m-3", "p-3", "rounded");

const el2 = document.createElement("p");
el2.innerText =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sed esse accusamus expedita distinctio excepturi voluptatum, vero soluta, temporibus earum aut numquam ut harum molestiae assumenda! Sit dolore officia nihil?";

el2.classList.add("m-3", "p-3");

const el3 = document.createElement("ul");
el3.classList.add("list-group", "px-3");

const el4 = document.createElement("li");
el4.innerText = "youtube";
el4.classList.add("list-group-item");

const el5 = document.createElement("li");
el5.classList.add("list-group-item");
el5.innerText = "google";

const el6 = document.createElement("li");
el6.classList.add("list-group-item");
el6.innerText = "facebook";

const a = document.createElement("a");
a.href = "https://google.com";
a.innerText = "to Google";
a.classList.add("btn", "btn-outline-primary", "text-primary", "m-3");

const btn = document.createElement("button");
// btn.innerHTML = `<i class='bi bi-house'></i> Home`
btn.style.margin = "20px";
btn.classList.add("btn", "btn-primary");

const house = document.createElement("i");
house.classList.add("bi", "bi-house");

btn.append(house);

const text = document.createTextNode(" Home");
btn.append(text);

const img = document.createElement("img");
img.src = "./images/poe-mamhe-thar-2.jpg";
img.width = 200;

const br = document.createElement("br");

btn.addEventListener("click", () => {
  console.log("hello world");
});

const frg = document.createDocumentFragment()
frg.append(el4);
frg.append(el5);
frg.append(el6);

el3.append(frg)

// el3.append(el4);
// el3.prepend(el5);
// el3.prepend(el6);

document.body.append(el3);
el3.before(el1);
el3.after(el2);

// document.body.append(el1);
// document.body.append(el2);
// document.body.append(el3);
// document.body.append(a)
// document.body.append(btn)
// document.body.append(br)
// document.body.append(img)

// console.log(el3);
//   console.log(el1);
//   console.log(el2);

// console.log(document.head);
// console.log(document.body);

const h1 = document.querySelector("h1");
console.log(h1);

// console.log(h1.childNodes[2]);
h1.childNodes[2].nodeValue = "STH";

h1.remove();

const ul = document.querySelector("ul");

ul.innerHTML = null;
// ul.removeChild(ul.children[0])
// ul.removeChild(ul.children[0])
// ul.removeChild(ul.children[0])
