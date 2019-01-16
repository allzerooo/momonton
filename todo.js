const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = 'toDos';


function paintToDo(text) {
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.innerHTML = "❌";
   const span = document.createElement("span");
   span.innerHTML = text;
   li.appendChild(span);
   li.appendChild(delBtn);
   toDoList.appendChild(li);
}


function handleSubmit(event) {
   event.preventDefault();
   const currentValue = toDoInput.value;
   paintToDo(currentValue);
   toDoInput.value = "";
} 


function loadTodos() {
   const toDos = localStorage.getItem(TODOS_LOCAL_STORAGE);

   if ( toDos !== null ) {

   }
}


function init() {
   loadTodos();
   toDoForm.addEventListener("submit", handleSubmit);
}

init();