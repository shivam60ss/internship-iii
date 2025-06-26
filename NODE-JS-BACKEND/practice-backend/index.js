
const express = require("express")
const app = express();
const path = require('path')
const PORT = 4000;

const TODOS = [
    {
        task: "this is task 1",
        completed: false
    }
]

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))

app.get("/add-todos", (req, res) => {
    res.redirect("addTodos.html")
})

app.post("/add-todos", (req, res) => {
    const newtask = req.body.task;
    TODOS.push({task:newtask,completed:false})
    res.status(200).json(TODOS);

    res.redirect("/add-todos")

})

app.get("/all-todos", (req, res) => {
    res.status(200).json(TODOS);
    
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})
