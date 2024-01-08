function create_Project() {

  let task_Project = document.createElement("section");
  task_Project.className = "create_project";
  document.body.appendChild(task_Project);
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
  let input = document.createElement("input");

  button.className = "button_task";
  button.type = "button";
  button.textContent = "I'm a button, click on me! UWU";
  button.addEventListener("click", addTask);

  input.className = "input_task";

  task_Project.appendChild(input);
  task_Project.appendChild(button);
  button.addEventListener("click", add_to_list);
}

create_task()
/*
function add_to_list () {
  let div_input = document.createElement("div");
  let time_div = "time_div_" + Date.now();
  div_input.setAttribute("id", time_div);
  div_input.innerHTML = document.querySelector("input").value;
  document.querySelector("div.to_do").appendChild(div_input);
}*/

// creation task
let task_title = document.getElementsById('todo');
let task_date = document.getElementById('todo_date');
let task_description = document.getElementById('todo_description');

function add_to_list () {
    let new_task = {
        id: `${task_title.value.join("-")}-${Date.now()}`,
        title: task_title.value,
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

// edit btn
let editBtn = document.querySelector(".edit-btn")
editBtn.addEventListener('click', () => {
    let edit_task = getElementById("edit");
    edit_task.contentEditable = true;
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        edit_task.contentEditable = false;
    }
})

// delete btn
let deleteBtn = document.querySelector('.delete-btn')
deleteBtn.addEventListener("click", () => {
    const index = new_task.indexOf();
    if (index !== -1){
        new_task.slice(index, 1);
        document.querySelector('.tasks').remove();
    }
});


