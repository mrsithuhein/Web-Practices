import { app, costTotal } from "./selector";

const createRecord = (product, quantity) => {
  const tr = document.createElement("tr");
  tr.classList.add("record-row");
  tr.setAttribute("product-id", product.id);
  const cost = product.price * quantity;
  tr.innerHTML = `
    <td class="counter"></td>
    <td>${product.name}</td>
    <td class="text-end">${product.price}</td>
    <td class="text-end quantity-btn-control">
    <button class="btn btn-sm quantity-minus-btn"><i class="bi bi-dash"></i></button>
    <span class="quantity-row">${quantity}</span>
    <button class="btn btn-sm quantity-plus-btn"><i class="bi bi-plus"></i></button>
    </td>
    <td class="text-end">
    <span class="cost-row">${cost}</span>
    <span><button class="btn btn-primary del-btn"><i class="bi bi-trash3"></i></button></span>
    </td>
    `;

  const delRow = () => {
    if (confirm("Are you sure to delete?")) {
      tr.remove();
      sumRecordCostTotal();
    }
  };
  const delBtn = tr.querySelector(".del-btn");
  delBtn.addEventListener("click", () => {
    delRow();
  });

  const quantityPlusBtn = tr.querySelector(".quantity-plus-btn");
  quantityPlusBtn.addEventListener("click", () => {
    updateExistedRecord(product, 1);
  });

  const quantityMinusBtn = tr.querySelector(".quantity-minus-btn");
  quantityMinusBtn.addEventListener("click", () => {
    const row = app.querySelector(`[product-id='${product.id}']`);
    const currentQuantity = row.querySelector(".quantity-row");
    currentQuantity.innerText > 1 && updateExistedRecord(product, -1);
  });

  return tr;
};

export const sumRecordCostTotal = () => {
  let total = 0;
  const costRows = app.querySelectorAll(".cost-row");
  costRows.forEach((cost) => {
    total += parseFloat(cost.innerHTML);
    costTotal.innerHTML = total;
    return total;
  });
};

export const addNewRecord = (product, quantity) => {
  records.append(createRecord(product, quantity));
};

export const updateExistedRecord = ({ id, price }, quantity) => {
  const row = app.querySelector(`[product-id='${id}']`);
  const currentQuantity = row.querySelector(".quantity-row");
  const currentCost = row.querySelector(".cost-row");
  currentQuantity.innerText =
    parseFloat(currentQuantity.innerText) + parseFloat(quantity);
  currentCost.innerText = currentQuantity.innerText * price;
  sumRecordCostTotal();
};
