const express = require("express");

const app = express();



const port = process.env.PORT || 3600

app.listen(port, ()=>{
    console.log(`Server Runnning on port ${port}`)
})