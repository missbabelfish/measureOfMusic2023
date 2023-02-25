const express = require('express')
const app = express()
const PORT = 4242

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index.ejs')
})




app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})
