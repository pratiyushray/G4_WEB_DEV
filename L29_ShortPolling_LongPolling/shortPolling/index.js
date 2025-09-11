const express = require("express");
const app = express();


let name = "Swastik [Initial Name]"
app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.get("/getname",(req,res)=>{
    res.send({name})
})

app.get("/updatename",(req,res)=>{
    name = "Priyanshu";
    res.send({name});
})


port = process.env.PORT || 5001;
app.listen(port,()=>{
    console.log(`Server will run on port ${port}`);
});


