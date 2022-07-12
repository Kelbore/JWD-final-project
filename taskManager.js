
const createTaskHtml = (name, description, assignedTo, dueDate, status) => {

  const html =`
   
       <div class="card w-50 list-group-item" >
        <div class="card-body">
          <h5 class="card-title">Name: ${name}</h5>
          <p class="card-text" >Description: ${description}</p>
          <p class="card-text" >Assigned To: ${assignedTo}</p>
          <p class="card-text" >Due Date: ${dueDate}</p>
          <p class="card-text" >Status: ${status}</p>
          <a href="#" class="btn btn-primary">Edit</a>
          <a href="#" class="btn btn-primary">Delete</a>
        </div>
      </div>`
    document.querySelector('#demo').innerHTML = html;
};


const taskHtml = createTaskHtml("Final project", "on progress", "July 17th, 2022", "group 5 members", "Build an app");

console.log(taskHtml);


class TaskManager {
  constructor(tasks, currentId) {
    this.tasks = [];
    this.currentId = 0;
  }


addTask(name, description, assignedTo, dueDate, status) { 
  const task = {
        id: this.currentId++,
        name: name ,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: status
    };

        this.tasks.push(task);
        console.log(this.tasks);
        this.render();
}

render() {
  const tasksHtmlList = [];
  for(let i=0; i<3; i++){
    let date = new Date('July 17th, 2022');
    let formattedDate = new Date().toString();
    let taskHtml = createTaskHtml("final project", "on progress", formattedDate, "group 5 members", "all");
    tasksHtmlList.push(taskHtml);
  }
  const taskHtml = tasksHtmlList.join('-');
  document.getElementById('secondcard').innerHTML = taskHtml;
  document.getElementById('thirdcard').innerHTML = taskHtml;
  document.getElementById('fourthcard').innerHTML = taskHtml;
  document.getElementById('fifthcard').innerHTML = taskHtml;
}  
}

function clickMe(){
  event.preventDefault();
  newTaskVar = new TaskManager();
  newTaskVar.addTask();
}

