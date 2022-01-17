const path = require("path");
const fs = require("fs");


const express = require('express');

const defaultRoutes = require('./routes/default')
const restaurantRoutes = require('./routes/restaurants')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.use('/', defaultRoutes);
// 最初"/"に合致するものを探す defaultRoutesを全て探したらここに返って処理続行

app.use('/', restaurantRoutes)
// これで良い


// urlミスでの表示
app.use((req,res)=>{
    // res.statusCode = 404
    res.status(404).render("404")
})

// サーバーエラー
app.use((error, req, res, next)=>{
    // res.statusCode = 500
    res.status(500).render("500")
    next()
})

app.listen(3000, ()=>{console.log("http://localhost:3000")})