const express = require("express")
const app = express()

const PORT = 8011

function status(){
    console.log(`Server running in ${PORT}`);
}

app.listen(PORT, status)