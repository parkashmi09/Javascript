const containers = document.querySelectorAll(".card-container");
const cards = document.querySelectorAll(".card");

const getDragAfterElement = (container, y) => {
  const draggableCards = [
    ...container.querySelectorAll(".card:not(.dragging)"),
  ];

  return draggableCards.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();

      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};

cards.forEach((card) => {
  card.addEventListener("dragstart", () => {
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggedCard = document.querySelector(".dragging");
    const afterElement = getDragAfterElement(container, e.clientY);

    if (afterElement === null) {
      container.appendChild(draggedCard);
    } else {
      container.insertBefore(draggedCard, afterElement);
    }
  });
});
const form = document.getElementById("form");
const input = document.getElementById("todo-input");
const container = document.getElementById("task");

// ... (your existing code)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTodoTask = document.createElement("div");
  newTodoTask.classList.add("card");
  newTodoTask.setAttribute("draggable", "true");
  newTodoTask.innerText = value;

  newTodoTask.addEventListener("dragstart", () => {
    newTodoTask.classList.add("dragging");
  });

  newTodoTask.addEventListener("dragend", () => {
    newTodoTask.classList.remove("dragging");
  });

  // Create a button element
  const button = document.createElement("button");
  button.textContent = "Delete"; // Set the button text
  button.classList.add("delete-button"); // Add a class if needed

  // Add a click event listener to the button for deletion
  button.addEventListener("click", () => {
    newTodoTask.remove();
  });

  // Append the button to the newTodoTask
  newTodoTask.appendChild(button);

  container.appendChild(newTodoTask);
  input.value = "";
});
