import Invoice from "./invoice";
import "../scss/app.scss";
import * as bootstrap from "bootstrap";

const invoiceApp = new Invoice();
invoiceApp.init();

//Modal Testing with JS
// export const myModal = app.querySelector("#exampleModal");
// console.log(myModal);
// export const bsModal = new bootstrap.Modal(myModal);
// console.log(bsModal);
// bsModal.show();
// window.setTimeout(() => {
//   bsModal.hide();
// }, 5000);
//  bsModal.toggle();

