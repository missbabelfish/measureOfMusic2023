const express = require(express)
const app = express()
const apiKey = PROCESS.ENV.API_KEY
const PORT = 4242

app.get('/', (req, res) => {
    res.send('index.ejs')
})




app.listen(PORT, () =>{
    console.log('server is running on port ${PORT}')
})
