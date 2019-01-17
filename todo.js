const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = 'toDos';

let toDos = [];


function deleteToDo(event) {
   const btn = event.target;
   const li = btn.parentNode;
   toDoList.removeChild(li);
   const cleanToDos = toDos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos;
   saveToDos();
}


function saveToDos() {
   localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos));
}


function paintToDo(text) {
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const newId = toDos.length + 1;
   delBtn.innerHTML = "❌";
   delBtn.addEventListener("click", deleteToDo);
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

   // localStorage가 TODO 목록을 가지고 있다면
   if ( loadedToDos !== null ) {
      // JSON 형태의 TODO 목록을 자바스크립트 형태로 변경
      const parsedToDos = JSON.parse(loadedToDos);
      // 각 항목마다 함수를 실행하는데
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