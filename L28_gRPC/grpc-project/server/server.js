const express = require("express");

const app = express();



const port = process.env.PORT || 3400

app.listen(port, ()=>{
    console.log(`Server Runnning on port ${port}`)
})