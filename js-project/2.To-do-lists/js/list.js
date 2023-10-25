const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");
const lists = document.querySelector("#lists");

const countList = () => {
  totalListCounter.innerText = lists.querySelectorAll(".list").length;
  doneListCounter.innerText = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked"
  ).length;
};

const char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getRanInt = (min, max) => {
  let result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

const getRanId = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += char[getRanInt(0, char.length)];
  }
  return result;
};

const createList = (listText) => {
  const checkerId = getRanId(10);
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
    <div class="border border-primary p-2 d-flex justify-content-between mb-2">
    <div class="form-check list-checker">
        <input class="form-check-input" type="checkbox" value="" id="${checkerId}">
        <label class="form-check-label list-label" for="${checkerId}">
            ${listText}
        </label>
    </div>
    <div>
        <button class="btn btn-outline-primary editBtn">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-outline-primary deleteBtn">
            <i class="bi bi-trash3"></i>
        </button>
    </div>
</div>
    `;
  textInput.value = null;

  const deleteBtn = list.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    const confirm = window.confirm("Are you sure to delete?");
    confirm && list.remove();
    countList();
  });

  const editBtn = list.querySelector(".editBtn");
  const listLabel = list.querySelector(".list-label");

  editBtn.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.classList.add("form-control");
    editInput.value = listLabel.innerText;
    listLabel.innerText = null;
    listLabel.append(editInput);

    editInput.addEventListener("change", () => {
      listLabel.innerText = editInput.value;
    });
  });

  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    countList();
  });

  return list;
};

addBtn.addEventListener("click", () => {
  if (textInput.value != "") {
    lists.append(createList(textInput.value));
    countList();
  } else {
    window.alert("Please input something!!");
  }
});
