import { input, lists } from "./elements.js";
import { app } from "./index.js";
import { createLi } from "./li.js";

export const saveBtnHandler = () => {
  const list = createLi(input.value);
  lists.append(list);
  input.value = null;

  app.querySelector("#totalCount").innerText = lists.children.length;
};
