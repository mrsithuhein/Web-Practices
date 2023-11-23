//selectors
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");
const lists = document.querySelector("#lists");

//function to get total list count and done list count
const countList = () => {
  const totalLists = lists.querySelectorAll(".list").length;
  totalListCounter.innerText = totalLists;
  doneListCounter.innerText = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked"
  ).length;

  if (totalLists === 0) {
    lists.innerHTML = `<p class="text-center empty-state">There is no list</p>`;
  } else {
    lists.querySelector(".empty-state")?.remove();
  }
};
countList();

//start of generate random id process
const char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//to get random integer to use as index number in getRanId function
const getRanInt = (min, max) => {
  let result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

//get random id with char by using index number from getRanInt function
const getRanId = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += char[getRanInt(0, char.length)];
  }
  return result;
};
//end of Generate random id process

//start of create new list process
const createList = (listText) => {
  const checkerId = getRanId(10);
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
    <div class="animate__animated animate__slideInLeft border border-primary p-2 d-flex justify-content-between mb-2">
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

  //delete button to delete list
  const deleteBtn = list.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      list
        .querySelector(".animate__animated")
        .classList.add("animate__fadeOut");
      list
        .querySelector(".animate__animated")
        .addEventListener("animationend", () => {
          list.remove();
          countList();
        });
    }
  });

  //edit button to edit list
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
  //end of create new list process

  //when list is checked to call count list function to update done list count
  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    list
      .querySelector(".list-label")
      .classList.toggle("text-decoration-line-through");
    list
      .querySelector(".animate__animated")
      .classList.replace("animate__slideInLeft", "animate__shakeX");
    countList();
  });

  return list;
};

//add button to create new list
addBtn.addEventListener("click", () => {
  if (textInput.value != "") {
    lists.append(createList(textInput.value));
    countList();
  } else {
    window.alert("Please input something!!");
  }
});
