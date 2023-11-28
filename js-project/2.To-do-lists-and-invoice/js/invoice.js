//Variable
const products = [
  {
    id: 1,
    name: "Domain Sale",
    price: 15,
  },
  {
    id: 2,
    name: "Graphic Design",
    price: 100,
  },
  {
    id: 3,
    name: "Web Design",
    price: 200,
  },
  {
    id: 4,
    name: "Web Development",
    price: 500,
  },
  {
    id: 5,
    name: "Application Development",
    price: 1000,
  },
];

//Selectors
const app = document.querySelector("#app");
const recordForm = app.querySelector("#recordForm");
const productSelect = app.querySelector("#productSelect");
const quantityInput = app.querySelector("#quantityInput");
const recordBtn = app.querySelector("#recordBtn");
const records = app.querySelector("#records");
const costTotal = app.querySelector("#costTotal");

//Functions
// const createFormOption = (product) => {
//   const option = document.createElement("option");
//   option.value = product.price;
//   option.innerText = product.name;
//   return option;
// };

const createRecordRow = (product, quantity) => {
  const recordRow = document.createElement("tr");
  recordRow.classList.add("record-row");
  recordRow.setAttribute("product-id", product.id);
  const cost = product.price * quantity;
  recordRow.innerHTML = `
  <td class="counter"></td>
  <td>${product.name}</td>
  <td class="text-end">${product.price}</td>
  <td class="text-end quantity-row">${quantity}</td>
  <td class="text-end cost-row">${cost}</td>
  `;
  return recordRow;
};

const sumCostTotal = () => {
  let total = 0;
  const costRows = app.querySelectorAll(".cost-row");
  costRows.forEach((cost) => {
    total += parseFloat(cost.innerHTML);
    costTotal.innerHTML = total;
    return total;
  });
};

//Process
products.forEach((product) =>
  productSelect.append(new Option(product.name, product.id))
);

recordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(recordForm);
  const currentProduct = products.find(
    (product) => product.id == data.get("product_select")
  );

  const isExistedProduct = app.querySelector(
    `[product-id='${currentProduct.id}']`
  );

  if (isExistedProduct) {
    const currentQuantity = isExistedProduct.querySelector(".quantity-row");
    const currentCost = isExistedProduct.querySelector(".cost-row");
    currentQuantity.innerText =
      parseFloat(currentQuantity.innerText) +
      parseFloat(data.get("quantity_input"));
    currentCost.innerText = currentQuantity.innerText * currentProduct.price;
  } else {
    records.append(createRecordRow(currentProduct, data.get("quantity_input")));
  }

  sumCostTotal();
  recordForm.reset();
});
