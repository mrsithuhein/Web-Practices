import { lists } from "./elements.js";

export const createLi = (text) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  li.append(delBtn);
  const textNode = document.createTextNode(" "+text);
  li.append(textNode);

  delBtn.addEventListener("click", () => {
    li.remove();
    app.querySelector("#totalCount").innerText = lists.children.length;
  });
  return li;
};
