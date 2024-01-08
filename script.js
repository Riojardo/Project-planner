function create_Project() {

  let task_Project = document.createElement("section");
  task_Project.className = "create_project";
  document.body.appendChild(task_Project);

  let title = document.createElement("h1");
  title.textContent = "Project Planner Ultimate"
  task_Project.appendChild(title);

  let task_Planner = document.createElement("section");
  task_Planner.className = "list_project";
  document.body.appendChild(task_Planner);

  let task_to_do = document.createElement("div");
  task_to_do.className = "to_do";
  let task_doing = document.createElement("div");
  task_doing.className = "doing";
  let task_done = document.createElement("div");
  task_done.className= "done";

  task_Planner.appendChild(task_to_do);
  task_Planner.appendChild(task_doing);
  task_Planner.appendChild(task_done);
}
create_Project();

function create_task() {
  let task_Project = document.querySelector("section.create_project");
  let button = document.createElement("button"); 
  button.className = "button_task";
  button.type = "button";
  button.textContent = "Show description";
  button.addEventListener("click", Show_description);
  let button_validate = document.createElement("button");
  button_validate.className = "button_validate";
  button_validate.type = "button";
  button_validate.textContent = "Validate";
  button_validate.addEventListener("click", add_Task);
  button_validate.style.display = "none";


  let input_title = document.createElement("input");
  input_title.minLength = 3;
  input_title.maxLength =256;
  input_title.placeholder = "Name of the project";
  let input_description = document.createElement("input");
  input_description.minLength = 5; 
  input_description.maxLength = 1024; 
  input_description.placeholder = "describe the task";
  input_description.style.display = "none";

  input_title.className = "input_task";
  input_description.className = "input_description"; 

  task_Project.appendChild(input_title);
  task_Project.appendChild(input_description);
  task_Project.appendChild(button);
  task_Project.appendChild(button_validate);
}

create_task();

function Show_description() {
  let input_title = document.querySelector(".input_task");
  if (input_title.value.length < 3) {
    alert ("please Enter a longer name")
  }else{
  let input_description = document.querySelector(".input_description");

  input_description.style.display = "block";
  let button_validate = document.querySelector(".button_validate");
  button_validate.style.display ="block"

  let button_task = document.querySelector(".button_task");
  button_task.style.display = "none";
}
}
  

function add_Task() {
  let input_description = document.querySelector(".input_description");
  if (input_description.value.length < 5) {
    alert ("please Enter a longer description")
  }else{
  let input_title = document.querySelector(".input_task");
  input_description.style.display = "none";

  let button_validate = document.querySelector(".button_validate");
  button_validate.style.display = "none";

  let button_task = document.querySelector(".button_task");
  button_task.style.display = "block";

 
  
  input_title.value = "";
  input_description.value = "";
}
  
}

/*
let task_title = document.getElementsByClassName('todo');
let task_date = document.getElementsByClassName('todo_date');
let task_description = document.getElementsByClassName('todo_description');



function add_to_list () {
    let new_task = {
        id: `${task_Project.value.join("-")}-${Date.now()}`,
        title: task_Project.value,
        date: task_date.value,
        description: task_description.value,
        datecrea: Date.now()
    };

    new_task.forEach(({id, title, date, description, datecrea}) => 
       (task_to_do.innerHTML  += `
            <li class="tasks id="${id}">
                <p>${datecrea}</p>
                <p>${title}</p>
                <p><span>À faire pour le:</span>${date}</p>
                <p>${description}</p>
                <button class="edit-btn"></button>
                <button class="delete-btn"></button>
            </li>`
        )
    ); 
};

document.querySelector(".edit-btn").addEventListener('click', () => {

})
*/