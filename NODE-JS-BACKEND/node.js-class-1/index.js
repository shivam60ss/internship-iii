const express = require("express");
const app = express();
const path = require("path")
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())


//middleware 
// app.use(()=>{
//     console.log("genetic midleware"); //req will stuck here
// })

app.use((req, res, next) => {
    console.log("genetic midleware");
    next() //i am telling req that it go forward(down)
})

app.use("/user", (req, res, next) => {
    console.log("path spacific middleware for '/user");
    next()

})
app.get("/contact", (req, res) => {
    console.log("contact api hit")
    res.redirect('contact.html')
})
app.post("/contact", (req, res) => {
    console.log(req.body)
    res.send("Form submitted successfully!");

})

app.get("/test",(req,res)=>{
    console.log(req.query);
    res.status(201).json({
        data:req.query
    })
})

app.get("/", (req, res) => {
    res.send({
        name: "shivam",
        num: "545577"
    })
})


app.get("/user", (req, res) => {
    // res.send("this is the req by user")
    return res.json({ name: "shivam" })
    res.json({ name: "shivamm" }) /// this will not work as function returned
})



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

