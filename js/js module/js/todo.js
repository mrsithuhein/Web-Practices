import { counter, input, lists, saveBtn, titleText } from "./elements.js";
import { saveBtnHandler } from "./handler.js";

export default class Todo {
  renderUi() {
    app.append(titleText);
    app.append(input);
    app.append(saveBtn);
    app.append(lists);
    app.append(counter);
  }
  listener() {
    saveBtn.addEventListener("click", saveBtnHandler);
  }
  init() {
    this.renderUi();
    this.listener();
  }
}
