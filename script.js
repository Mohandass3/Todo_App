document.addEventListener("DOMContentLoaded",()=>{
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit= document.querySelector(".todo-submit");
  const todoList= document.querySelector(".todo-list");
  const todoReset= document.querySelector(".todo-reset");
  let editMode= false;
  let editItem=null;


  todoForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const todoText = todoInput.value.trim();

    // Error Handling 
    if(todoText!==""){
      if(editMode){
        editItem.firstChild.textContent=todoText;
        todoSubmit.innerHTML="Add Task";
        editMode=false;
        editItem=null;
        todoInput.value="";
        return;
      }
      addTodoItem(todoText);
      todoInput.value="";
    }else{
      alert("Please enter a valid task");
    }
  });

todoList.addEventListener("click",function(event){
  const target = event.target;
  if(target.tagName ==="BUTTON"){
    const todoItem = target.parentNode;
    if(target.innerText==="❌"){
      todoItem.remove();
    }else if(target.innerText==="🖊️"){
      editMode= true;
      editItem= todoItem;
      todoSubmit.innerHTML="Edit Task";
      todoInput.value = todoItem.firstChild.textContent;
      todoInput.focus();
    }
  }  
})
// Event listener for the Reset button
todoReset.addEventListener("click", () => {
  // Clear all list items from the todoList
  todoList.innerHTML = "";
  // Also reset edit mode if it was active
  editMode = false;
  editItem = null;
  todoSubmit.textContent = "Add Task";
  todoInput.value = "";
});
  // handling the functionality of the Add Task button
  function addTodoItem(todoText){
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML=`<span>${todoText}</span>`;
    editButton.innerHTML=`🖊️`;
    removeButton.innerHTML=`❌`;

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});