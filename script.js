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
  button.addEventListener("click", add_to_list);

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
  let task_input = document.querySelector("input").value;

}
*/