const express = require("express");
const app = express();
const PORT = 3000;

console.log("object");
console.log("object");

app.get("/",(req,res)=>{
    res.send({name :"shivam",
        num:"545577"
    })
})
app.get("/about",(req,res)=>{
    res.send({name :"shivam",
        num:"545577"
    })
})

app.get("/user",(req,res)=>{
    // res.send("this is the req by user")
    let user = {
        name:"shivam",
        arr:[1,2,2,3],
        add:"panipat"

    }
    res.json(user);
})




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})