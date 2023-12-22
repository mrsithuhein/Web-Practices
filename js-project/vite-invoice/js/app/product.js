import { inventoryLists, productSelect } from "./selector";
import { products } from "./variable";

export const productSelectRender = () => {
  products.forEach(({ id, name }) => {
    productSelect.append(new Option(name, id));
  });
};

export const productListRender = () => {
  products.forEach(({ name, price }) => {
    inventoryLists.append(createNewItem({ name, price }));
  });
};

export const createNewItem = (product) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `
  <div class="row justify-content-between">
    <div class="col-8">${product.name}</div>
    <div class="col-4 text-end text-black-50">$<span>${product.price}</span></div>
  </div>
  `;
  return li;
};
