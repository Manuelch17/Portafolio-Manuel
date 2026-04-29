const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const filters = document.querySelectorAll(".filter");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompleted");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// 🧠 Render principal
function renderTasks() {
  list.innerHTML = "";

  let filteredTasks = tasks;

  if (currentFilter === "pending") {
    filteredTasks = tasks.filter(t => !t.completed);
  } else if (currentFilter === "completed") {
    filteredTasks = tasks.filter(t => t.completed);
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">
        ${task.text}
      </span>
      <div>
        <button onclick="toggleTask(${index})">✔</button>
        <button onclick="deleteTask(${index})">✕</button>
      </div>
    `;

    list.appendChild(li);
  });

  updateCounter();
}

// ➕ Añadir tarea
function addTask() {
  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  saveTasks();
  renderTasks();
}

// ✅ Completar tarea
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// ❌ Eliminar tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// 🧹 Limpiar completadas
function clearCompleted() {
  tasks = tasks.filter(t => !t.completed);
  saveTasks();
  renderTasks();
}

// 🔢 Contador
function updateCounter() {
  const total = tasks.length;
  const pending = tasks.filter(t => !t.completed).length;

  taskCount.textContent = `${pending} pendientes de ${total}`;
}

// 💾 Guardar
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 🎛 Filtros
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// ⌨️ Enter para añadir
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Eventos
addBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompleted);

// Inicializar
renderTasks();