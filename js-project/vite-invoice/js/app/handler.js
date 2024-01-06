import { Offcanvas } from "bootstrap";
import { createNewItem } from "./product";
import {
  addNewRecord,
  sumRecordCostTotal,
  updateExistedRecord,
} from "./record";
import { app, inventory, newItemForm, productSelect, recordForm } from "./selector";
import { products } from "./variable";

export const recordFormHandler = (event) => {
  event.preventDefault();
  const data = new FormData(recordForm);
  const currentProduct = products.find(
    (product) => product.id == data.get("product_select")
  );

  const isExistedProduct = app.querySelector(
    `[product-id='${currentProduct.id}']`
  );
  if (isExistedProduct) {
    updateExistedRecord(currentProduct, data.get("quantity_input"));
  } else {
    addNewRecord(currentProduct, data.get("quantity_input"));
  }

  sumRecordCostTotal();
  recordForm.reset();
};

export const newItemFormHandler = (event) => {
  event.preventDefault();
  const data = new FormData(newItemForm);
  let newItem = {};
  newItem.id = products[products.length - 1].id + 1;
  newItem.name = data.get("item_name");
  newItem.price = data.get("item_price");
  inventoryLists.append(createNewItem(newItem));
  products.push(newItem);
  productSelect.append(new Option(newItem.name, newItem.id));
  newItemForm.reset();
};

export const printerHandler = () => {
  print();
  const recordRows = records.querySelectorAll(".record-row");
  recordRows.forEach((row) => {
    row.remove();
  });
  costTotal.innerText = 0;
};

export const inventoryBtnHandler = () => {
  const myInventoryOffcanvas = new Offcanvas(inventory);
  myInventoryOffcanvas.show();
}