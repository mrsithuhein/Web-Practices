//Selector
const width = document.getElementById("width");
const height = document.getElementById("height");
const calBtn = document.getElementById("calBtn");
const result = document.getElementById("result");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
const lists = document.getElementById("lists");
// const width = document.getElementById("width")

//function
const cal = (w, h) => w * h;

//progress
const handleClick = () => {
  const area = cal(width.valueAsNumber, height.valueAsNumber);
  result.innerText = `${width.value} ft * ${height.value} ft = ${area} sqft`;
  width.value = null;
  height.value = null;
};

const store = () => {
  lists.innerHTML += `<li>${result.innerText}</li>`;
  result.innerText = null;
};

const clear = () => {
  result.innerText = null;
};

calBtn.addEventListener("click", handleClick);
storeBtn.addEventListener("click", store);
clearBtn.addEventListener("click", clear);



