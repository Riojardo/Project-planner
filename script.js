function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function onDragEnter(event) {
  event.preventDefault();
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let draggedElement = document.getElementById(data);
  event.target.appendChild(draggedElement);
}

function create_Project() {
  let task_Project = document.createElement("section");
  task_Project.className = "create_project";
  document.body.appendChild(task_Project);

  let title = document.createElement("h1");
  title.textContent = "Project Planner Ultimate";
  task_Project.appendChild(title);

  let task_Planner = document.createElement("section");
  task_Planner.className = "list_project";
  document.body.appendChild(task_Planner);

  let task_to_do = document.createElement("div");
  task_to_do.className = "to_do column_list";
  task_to_do.addEventListener("dragenter", onDragEnter);
  task_to_do.addEventListener("dragover", onDragOver);
  task_to_do.addEventListener("drop", onDrop);

  let task_doing = document.createElement("div");
  task_doing.className = "doing column_list";
  task_doing.addEventListener("dragenter", onDragEnter);
  task_doing.addEventListener("dragover", onDragOver);
  task_doing.addEventListener("drop", onDrop);

  let task_done = document.createElement("div");

  task_done.className = "done column_list";
  task_done.addEventListener("dragenter", onDragEnter);
  task_done.addEventListener("dragover", onDragOver);
  task_done.addEventListener("drop", onDrop);

  task_Planner.appendChild(task_to_do);
  task_Planner.appendChild(task_doing);
  task_Planner.appendChild(task_done);
}

function refresh_all() {
    let button = document.createElement("button");
    let to_do = document.querySelector(".to_do");
    let doing = document.querySelector(".doing");
    let done = document.querySelector(".done"); // Add a dot here
    document.querySelector(".create_project").appendChild(button);
    button.type = "button";
    button.innerHTML = "DELETE ALL";
    button.addEventListener("click", function () {
        new_task = [];
        localStorage.removeItem("array");
        to_do.innerHTML = "";
        doing.innerHTML = "";
        done.innerHTML = "";
    });
}

function create_task() {
 
  let task_Project = document.querySelector("section.create_project");
  let button = document.createElement("button");
  button.className = "button_task btn";
  button.type = "button";
  button.textContent = "Show description";
  button.addEventListener("click", Show_description);
  let button_validate = document.createElement("button");
  button_validate.className = "button_validate btn";
  button_validate.type = "button";
  button_validate.textContent = "Validate";
  button_validate.addEventListener("click", add_Task);
  button_validate.style.display = "none";

  let input_title = document.createElement("input");
  input_title.minLength = 3;
  input_title.maxLength = 256;
  input_title.placeholder = "Name of the project";

  let input_description = document.createElement("input");
  input_description.minLength = 5;
  input_description.maxLength = 1024;
  input_description.placeholder = "describe the task";
  input_description.style.display = "none";

  let date_Min = new Date();
  let currentDate = new Date();
  let input_date = document.createElement("input");
  input_date.type = "date";
  input_date.min = date_Min;
  input_date.max = date_Min.setFullYear(currentDate.getFullYear() + 5);
  input_date.style.display = "none";

  input_title.className = "input_task input";
  input_description.className = "input_description input";
  input_date.className = "input_date";

  task_Project.appendChild(input_title);
  task_Project.appendChild(input_description);
  task_Project.appendChild(input_date);
  task_Project.appendChild(button);
  task_Project.appendChild(button_validate);
}


function Show_description() {
  let input_title = document.querySelector(".input_task");
  if (input_title.value.length < 3) {
    alert("please Enter a longer name");
  } else {
    let input_description = document.querySelector(".input_description");

    input_description.style.display = "block";
    let button_validate = document.querySelector(".button_validate");
    button_validate.style.display = "block";

    let input_date = document.querySelector(".input_date");
    input_date.style.display = "block";

    let button_task = document.querySelector(".button_task");
    button_task.style.display = "none";
  }
}

let new_task = [];

function add_Task() {

  let input_description = document.querySelector(".input_description");
  let input_title = document.querySelector(".input_task");
  let date = document.querySelector(".input_date");
  let task_date = new Date();
  let id_date = Date.now();
  let formatted_Date = task_date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (input_description.value.length < 5) {
    alert("please Enter a longer description");
  } else {
    input_description.style.display = "none";

    let button_validate = document.querySelector(".button_validate");
    button_validate.style.display = "none";

    let input_date = document.querySelector(".input_date");
    input_date.style.display = "none";

    console.log(input_date.value);
    let selectedDate = new Date(input_date.value);
    let time_input = selectedDate.getTime();
    console.log(time_input);

    let button_task = document.querySelector(".button_task");
    button_task.style.display = "block";
    
    new_task.push({
        id: input_title.value + "-" + id_date,
        title: input_title.value,
        date: date.value,
        description: input_description.value,
        datecrea: formatted_Date,
    });

    let task_to_do = document.querySelector(".to_do");

    new_task.forEach(
      ({ id, title, date, description, datecrea }) =>
        (task_to_do.innerHTML += `
        
   <div class="tasks" id="${id}" draggable="true" ondragstart="drag(event)">
        <label class="tasks_move"> Urgent ! <input type ="checkbox" class = "urgent"></label>
            <p class"tasks_crea"><span>Task create the : </span>${datecrea}</p>
            <p class="tasks_title">${title}</p>
            <p class="tasks_descr">${description}</p>
            <p class="tasks_donefor"><span>Due date fixed for : </span>${date}</p>
            <div class="btn-task">
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
            </div>
        </div>`)
    );
    save_storage();
  }
  

  // edit btn
  let editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach(editBtn => {
      editBtn.addEventListener('click', function() {
        let taskToEdit = this.parentElement.parentElement;
        let titleToEdit = taskToEdit.querySelector('.tasks_title');
        let descriptionToEdit = taskToEdit.querySelector('.tasks_descr');
  
        titleToEdit.contentEditable = true;
        titleToEdit.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  
        descriptionToEdit.contentEditable = true;
        descriptionToEdit.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

        titleToEdit.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
              e.preventDefault();
              titleToEdit.contentEditable = false;
              titleToEdit.style.backgroundColor = "";
          }
        });

        descriptionToEdit.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
              e.preventDefault();
              descriptionToEdit.contentEditable = false;
              descriptionToEdit.style.backgroundColor = "";
          }
        });
      });
  });
  

  // delete btn
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', function() {
          const taskId = this.closest('.tasks').id;
          const index = new_task.findIndex(task => task.id === taskId);
          if (index !== -1) {
              new_task.splice(index, 1);
              document.getElementById(taskId).remove();
              save_storage();
          }
      });
  });
  

  let div_priority = document.querySelectorAll(".tasks");

  div_priority.forEach((div_priority) => {
    let urgent_label = div_priority.querySelector(".urgent");

    urgent_label.addEventListener("click", function () {
      if (urgent_label.checked) {
        div_priority.classList.add("priority");
        div_priority.parentNode.insertBefore(
          div_priority,
          div_priority.parentNode.firstElementChild
        );
      } else {
        div_priority.classList.remove("priority");
        div_priority.parentNode.appendChild(div_priority);
      }
      save_storage();
    });
    
  });

  input_title.value = "";
  input_description.value = "";
}

function recreate_list() {
    

}

function save_storage() {
  let json_new_task = JSON.stringify(new_task);
  localStorage.setItem("array", json_new_task);
}

function recup_storage() {
    let storage = localStorage.getItem("array");
    let saved_input = JSON.parse(storage);
    if (saved_input && Array.isArray(saved_input)) {
      new_task = saved_input;
      console.log(new_task);
    } else {
      console.log(new_task);
    }
}

create_Project();
create_task();
refresh_all();
recup_storage();
recreate_list();