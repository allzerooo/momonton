const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = 'toDos';

const toDos = [];


function saveToDos() {
   localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos));
}


function paintToDo(text) {
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const newId = toDos.length + 1;
   delBtn.innerHTML = "❌";
   span.innerHTML = text;
   li.appendChild(delBtn);
   li.appendChild(span);
   li.id = newId;
   toDoList.appendChild(li);
   const toDoObj = {
      text : text,
      id : newId
   };
   toDos.push(toDoObj);
   saveToDos();
}


function handleSubmit(event) {
   event.preventDefault();
   const currentValue = toDoInput.value;
   paintToDo(currentValue);
   toDoInput.value = "";
} 


function loadTodos() {
   const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGE);

   if ( loadedToDos !== null ) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
         paintToDo(toDo.text);
      });
   }
}


function init() {
   loadTodos();
   toDoForm.addEventListener("submit", handleSubmit);
}

init();