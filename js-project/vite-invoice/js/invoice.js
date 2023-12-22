import {
  newItemFormHandler,
  printerHandler,
  recordFormHandler,
} from "./app/handler";
import { productListRender, productSelectRender } from "./app/product";
import { newItemForm, printer, recordForm } from "./app/selector";

export default class Invoice {
  init() {
    productSelectRender();
    productListRender();
  
    recordForm.addEventListener("submit", recordFormHandler);
    newItemForm.addEventListener("submit", newItemFormHandler);
    printer.addEventListener("click", printerHandler);
  }
}
