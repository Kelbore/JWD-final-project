const assign = new TaskManager();

document.getElementById("submit").addEventListener("click", buttonClick);


function buttonClick() {
  event.preventDefault();
  let taskName = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let assignedTo = document.getElementById('assignedTo').value;
  let dueDate =  document.getElementById('dueDate').value;
  let status = document.getElementById('status').value;
  assign.addTask(taskName, description, assignedTo, dueDate,status);
  console.log("It Works!"); 
}
  //newTaskVar.addTask();
  
  
