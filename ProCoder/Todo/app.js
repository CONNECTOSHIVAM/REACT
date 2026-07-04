const STORAGE_KEY = "todo-app-items";

let todos = loadTodos();
let filter = "all";

const addForm = document.getElementById("addForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const emptyState = document.getElementById("emptyState");
const countEl = document.getElementById("count");
const clearBtn = document.getElementById("clearCompleted");
const filterBtns = document.querySelectorAll(".filter");

function loadTodos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;

  todos.unshift({
    id: crypto.randomUUID(),
    text: trimmed,
    completed: false,
    createdAt: Date.now(),
  });

  saveTodos();
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    render();
  }
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  render();
}

function clearCompleted() {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
  render();
}

function getFilteredTodos() {
  switch (filter) {
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
}

function render() {
  const filtered = getFilteredTodos();
  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  todoList.innerHTML = "";

  filtered.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item${todo.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "×";
    deleteBtn.setAttribute("aria-label", "Delete todo");
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.append(checkbox, span, deleteBtn);
    todoList.appendChild(li);
  });

  emptyState.hidden = filtered.length > 0;
  countEl.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
  clearBtn.hidden = completedCount === 0;
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = "";
  todoInput.focus();
});

clearBtn.addEventListener("click", clearCompleted);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

render();
todoInput.focus();
