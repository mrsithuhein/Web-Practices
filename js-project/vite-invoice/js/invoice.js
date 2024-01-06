import {
  inventoryBtnHandler,
  newItemFormHandler,
  printerHandler,
  recordFormHandler,
} from "./app/handler";
import { productListRender, productSelectRender } from "./app/product";
import { recordObserver } from "./app/record";
import {
  inventory,
  inventoryBtn,
  newItemForm,
  printer,
  recordForm,
} from "./app/selector";

export default class Invoice {
  Observer() {
    recordObserver();
  }
  initialRender() {
    productSelectRender();
    productListRender();
  }
  listener() {
    recordForm.addEventListener("submit", recordFormHandler);
    newItemForm.addEventListener("submit", newItemFormHandler);
    printer.addEventListener("click", printerHandler);
    inventoryBtn.addEventListener("click", inventoryBtnHandler);
  }
  init() {
    this.initialRender();
    this.listener();
    this.Observer();
  }
}
