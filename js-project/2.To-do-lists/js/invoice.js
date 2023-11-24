//Variable
const products = [
  {
    id: 1,
    name: "Doamain Sale",
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

//Functions
// const createFormOption = (product) => {
//   const option = document.createElement("option");
//   option.value = product.price;
//   option.innerText = product.name;
//   return option;
// };

//Process
products.forEach((product) =>
  productSelect.append(new Option(product.name, product.id))
);

recordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(recordForm);
  console.log(data.get("product_select"));
  console.log(data.get("quantity_input"));
  const currentProduct = products.find(
    (product) => product.id == data.get("product_select")
  );
  console.log(currentProduct);
});
