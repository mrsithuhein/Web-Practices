const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");

addBtn.addEventListener("click", () => {
  console.log(textInput.value);
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
    <div class="border border-primary p-3 d-flex justify-content-between">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
            checked>
        <label class="form-check-label" for="flexCheckChecked">
            something
        </label>
    </div>
    <div>
        <button class="btn btn-outline-primary">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-outline-primary">
            <i class="bi bi-trash3"></i>
        </button>
    </div>
</div>
    `;
    console.log(list);
  textInput.value = null;
});
