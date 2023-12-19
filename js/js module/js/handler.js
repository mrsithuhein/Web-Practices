import { input, lists } from "./elements.js";

export const saveBtnHandler = () => {
  const li = document.createElement("li");
  li.innerText = input.value;
  lists.append(li);
  input.value = null;
};
