
const assign = new TaskManager();

taskform.addEventListener("submit", function() {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let assignedTo = document.getElementById('assignedTo').value;
  let description = document.getElementById('description').value;
  let status = document.getElementById('status').value;
  let dueDate =  document.getElementById('dueDate').value;
  

 
  if(name.length == 0) {
    console.log("You must fill out this field");
  } else {
     assign.addTask(name, assignedTo, description, status, dueDate);
     console.log("It Works!"); 
  }
 
});
function validFormFieldInput(data){
  const newTaskNameInput = document.querySelector('#name');
  const name = newTaskNameInput.value;
  const newTaskAssignedToInput = document.querySelector('#assignedTo');
  const assignedTo = newTaskAssignedToInput.value;
  const newTaskDescriptionInput = document.querySelector('#description');
  const description = newTaskDescriptionInput.value;
   const newTaskStatusInput = document.querySelector('#status');
  const status = newTaskStatusInput.value;
  const newTaskdueDateInput = document.querySelector('#dueDate');
  const dueDate = newTaskdueDateInput.value;
 
 
}
