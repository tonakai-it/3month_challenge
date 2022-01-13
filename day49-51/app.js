const path = require("path")

const express = require('express');
const app = express()
app.use(express.urlencoded(extended=false))
app.use(express.static(path.resolve(__dirname, "views")))


app.get("/", (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'views','index.html'))
})

app.get("/restaurants", (req, res)=>{
    const htmlFilePath = path.resolve(__dirname, 'views', 'restaurants.html')
    res.sendFile(htmlFilePath)
})

app.get("/recommend", (req, res)=>{
    const htmlFilePath = path.resolve(__dirname, 'views', 'recommend.html')
    res.sendFile(htmlFilePath)
})

app.get("/confirm", (req, res)=>{
    const htmlFilePath = path.resolve(__dirname, 'views', 'confirm.html')
    res.sendFile(htmlFilePath)
})

app.get("/about", (req, res)=>{
    const htmlFilePath = path.resolve(__dirname, 'views', 'about.html')
    res.sendFile(htmlFilePath)
})

app.listen(3000, ()=>{console.log("http://localhost:3000")})