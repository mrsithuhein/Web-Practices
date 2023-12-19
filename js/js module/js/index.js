import { counter, input, lists, saveBtn, titleText } from "./elements.js";
import { saveBtnHandler } from "./handler.js";

const app = document.querySelector("#app");

app.append(titleText);
app.append(input);
app.append(saveBtn);
app.append(lists);
app.append(counter);
saveBtn.addEventListener("click", saveBtnHandler);
