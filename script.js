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
    task_to_do.className = "to_do column_list";
    let task_doing = document.createElement("div");
    task_doing.className = "doing column_list";
    let task_done = document.createElement("div");
    task_done.className= "done column_list";
  
    task_Planner.appendChild(task_to_do);
    task_Planner.appendChild(task_doing);
    task_Planner.appendChild(task_done);
  }
  create_Project();
  
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
    input_title.maxLength =256;
    input_title.placeholder = "Name of the project";
    
    let input_description = document.createElement("input");
    input_description.minLength = 5; 
    input_description.maxLength = 1024; 
    input_description.placeholder = "describe the task";
    input_description.style.display = "none";
    
    let date_Min = new Date()
    let currentDate = new Date()
    let input_date= document.createElement("input");
    input_date.type ="date"
    input_date.min = date_Min;
    input_date.max = date_Min.setFullYear(currentDate.getFullYear() + 5);
    input_date.style.display = "none";
  
    input_title.className = "input_task input";
    input_description.className = "input_description input"; 
    input_date.className ="input_date";
  
    
    task_Project.appendChild(input_title);
    task_Project.appendChild(input_description);
    task_Project.appendChild(input_date);
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
  
    let input_date = document.querySelector(".input_date");
    input_date.style.display ="block"
  
    let button_task = document.querySelector(".button_task");
    button_task.style.display = "none";
  }
  }
  
  function add_Task() {
    let new_task = [];
    let input_description = document.querySelector(".input_description");
    let input_title = document.querySelector(".input_task");
    let date =  document.querySelector(".input_date");
    let task_date = new Date();
    let id_date = Date.now();
    let formatted_Date = task_date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  
    
    
    if (input_description.value.length < 5) {
      alert ("please Enter a longer description")
    }else{
    
    input_description.style.display = "none";
  
    let button_validate = document.querySelector(".button_validate");
    button_validate.style.display = "none";
  
    let input_date = document.querySelector(".input_date");
    input_date.style.display = "none";
  
    console.log(input_date.value)
    let selectedDate = new Date(input_date.value);
    let time_input= selectedDate.getTime();
    console.log(time_input)
    
    let button_task = document.querySelector(".button_task");
    button_task.style.display = "block";
    
              let new_task = [{
      "id": input_title.value + "-" + id_date,
      "title": input_title.value,
      "date": date.value,
      "description": input_description.value,
      "datecrea": formatted_Date
  }];
  
  let task_to_do = document.querySelector(".to_do")
  
  new_task.forEach(({id, title, date, description, datecrea}) => 
     (task_to_do.innerHTML  += `
        <div class="tasks" id="${id} draggable="true" ondragstart="drag(event)"">
            <label class="tasks_move">Move to doing<input type ="checkbox"></label>
            <p class"tasks_crea">Task create the : ${datecrea}</p>
            <p class="tasks_title">${title}</p>
            <p class="tasks_descr">${description}</p>
            <p class="tasks_donefor">Due date fixed for : ${date}</p>
            <button class="edit-btn btn-task">Edit</button>
            <button class="delete-btn btn-task">Delete</button>
        </div>`
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
  
    input_title.value = "";
    input_description.value = "";
  
  }
