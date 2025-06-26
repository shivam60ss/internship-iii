// const btnContainer = document.getElementById("btn-container")

// btnContainer.addEventListener("click",(e)=>{
//     if(e.target.tagName === "active" || e.target.id=="all" || e.target.id=="completed"){
//         for(let btn of btnContainer.children){
//             btn.classList.remove("bg-green-500");
//             btn.classList.remove("text-white")
//         };
//         e.target.classList.add("bg-green-500")
//         e.target.classList.add("text-white")
//     }
// })


const btnContainer = document.getElementById("btn-container");
const form = document.getElementById("todo-form")
const taskContainer = document.getElementById("task-container");

const renderTodos = (todos) => {
    taskContainer.innerHTML = ""; // Clear before rendering

    for (let todo of todos) {
        const div = document.createElement("div");
        div.className = `flex justify-between items-center border p-2 my-2 rounded-md hover:bg-gray-200 gap-5   ${todo.completed ? 'bg-green-100' : 'bg-white'}`;

        div.innerHTML = `
        <span class="text-sm  text-gray-400 hover:text-red-500">${todo.completed ? 'Completed' : 'Active'}</span>
        <span class="w-[60%] border p-2 rounded hover:border-blue-400 ${todo.completed ? 'line-through text-gray-500 ' : ''}">${todo.task}</span>
            <button class="bg-green-500 p-2 rounded text-white px-5 ml-5 hover:bg-green-600" id="completed">Completed</button>
            <button class="bg-red-500 p-2 rounded text-white px-5 hover:bg-red-600  " id="completed">Delete</button>
        `;
        // console.log("one task rendered")
        taskContainer.appendChild(div);
    };
};

//  Fetch all todos from backend
const getAllTodos = async () => {
    try {
        const res = await axios.get("http://localhost:4000/all-todos");
        console.log(res.data);
        renderTodos(res.data); // Expecting res.data.todos = [{task, completed},...]

    } catch (err) {
        console.error("Failed to fetch todos:", err);
    }
};

//for submit handler
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const taskText = e.target.children[0].value;
    if (taskText.trim().length == 0) {
        alert("Please enter a task");
    }

    let result = await axios.post("http://localhost:4000/add-todos", { task: taskText });
    console.log(result.data)
    getAllTodos();
})


//for filter button logic 
btnContainer.addEventListener("click", (e) => {
    if (e.target.id == "active" || e.target.id == "all" || e.target.id == "completed") {
        console.log("clivked btn")
        // Remove highlight from all buttons
        for (let btn of btnContainer.children) {
            btn.classList.remove("bg-green-500");
            btn.classList.remove("text-white");
        }
        // Highlight the clicked button
        e.target.classList.add("bg-green-500");
        e.target.classList.add("text-white");
        // Optional: Add filter logic here (e.g., renderTodos("active"))
    }
});
getAllTodos();



