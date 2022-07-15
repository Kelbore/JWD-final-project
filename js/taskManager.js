
const createTaskHtml = (name, assignedTo, description, status, dueDate) => {

  const html = `
       <div class="col-4 mb-5>
       <div class="card list-group-item" >
        <div class="card-body">
          <h5 class="card-title">Name: ${name}</h5>
          <p class="card-text" >Assigned To: ${assignedTo}</p>
          <p class="card-text" >Description: ${description}</p>
          <p class="card-text" >Status: ${status}</p>
          <p class="card-text" >Due Date: ${dueDate}</p>
          <a href="#" class="btn btn-primary">Edit</a>
          <a href="#" class="btn btn-primary">Delete</a>
          <button type="button" class="btn btn-primary" id="done">Mark as Done</button>
        </div>
      </div>
     </div>  <br>
`
 return html;
};





class TaskManager {
  constructor(tasks, currentId) {
    this.tasks = [];
    this.currentId = 0;
  }


  addTask(name, assignedTo, description, status, dueDate) {
    const task = {
      id: this.currentId++,
      name: name,
      assignedTo: assignedTo,
      description: description,
      status: status,
      dueDate: dueDate
    };

    this.tasks.push(task);
    console.log(this.tasks);
    this.render();
  }

 render() {
    var tasksHtmlList = [];
    var tasksHtmlVar = tasksHtmlList;

    for(let i = 0; i < this.tasks.length; i++){
      var currentTask = this.tasks[i];
      const newDate = new Date(currentTask.dueDate);
      // due to time zones, date is ahead by one day
      const formattedDate = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
      var taskHtml = createTaskHtml(currentTask.name, 
     currentTask.assignedTo, currentTask.description, currentTask.status, formattedDate);
      tasksHtmlList.push(taskHtml);
      console.log(taskHtml);
      for(let i = 0; i < tasksHtmlList.length; i++){
        document.getElementById("taskList").innerHTML = tasksHtmlList;
      }
    }
      const tasksHtml = tasksHtmlList.join('\n');
      const tasksList = document.querySelector('#taskList');
      tasksList.innerHTML = tasksHtml;
   
  }
}

function clickMe() {
  event.preventDefault();
  newTaskVar = new TaskManager();
  newTaskVar.addTask();
}

