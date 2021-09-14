const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li
    class="
      list-group-item
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};

// 내가 추가한 중복체크 항목!
const isDuplicated = (term) => {
  return Array.from(list.children).filter(
    (todo) => todo.textContent.toLowerCase().trim() === term
  ).length;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length === 0) alert("You must write something to add!");
  else if (isDuplicated(todo.toLowerCase())) {
    alert("Oops, You wrote a duplicated list!");
    addForm.reset();
  } else {
    generateTemplate(todo);
    addForm.reset();
  }
});

// event delegation을 이용하여 각 trash icon에 delete action 적용
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// searching & filtering - keyup event
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
