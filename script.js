let btn = document.querySelector("button")
let toDoContainer = document.querySelector("#toDo")

btn.addEventListener("click", (event) =>{
    let task = document.createElement("div")
    task.className = "addTask"
    task.innerHTML = "click to edit"
    toDoContainer.append(task)
    task.setAttribute("contenteditable", "true")
    task.focus();

    task.addEventListener("blur", (event)=>{
        let target = event.target.value;
        if(! target.innerHTML.trim()){
            document.remove();
        }
    })

    let selector = document.createElement("select");
selector.innerHTML = `
<option value="toDo">To Do </option>
<option value="inProgress">In Progress </option>
<option value="done">Done </option>
`
task.append(selector);

selector.addEventListener("change", (event)=>{
    // console.log(event);
    let status = event.target.value;
    document.getElementById(status).append(task);
})
})