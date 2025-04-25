const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, '../frontend-app/dist')))

app.use((req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../frontend-app/dist/index.html'))
})


app.listen(8888,()=>console.log('started listening on port 8888'))