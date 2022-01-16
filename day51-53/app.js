const path = require("path");
const fs = require("fs");

const uuid = require('uuid')

const express = require('express');

const utilModule = require("./util/restaurant-data")

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get("/", (req,res) =>{
    res.render('index')
})

app.get("/restaurants", (req, res)=>{
    const filePath = path.join(__dirname, 'data', 'restaurants.json')

    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData);
    res.render('restaurants', { numberOfRestaurants:storedRestaurants.length, restaurants:storedRestaurants  })
})
// app.get('/restaurant1')
// app.get('/restaurant1')
app.get('/restaurants/:id', (req, res)=> { //restaurants/r1
    const resutarantId = req.params.id; // [req.params.]でslug部分(=id)が補完されるようになっている
    const restaurants = utilModule.getStoredRestaurants()


    for (const restaurant of restaurants) {
        if (restaurant.id === resutarantId) {
            return res.render('restaurant-detail', {restaurant: restaurant})
        }
    }

    res.status(400).render('404');
})

app.get("/recommend", (req, res)=>{
    res.render('recommend')
})

app.post("/recommend", (req,res) =>{
    const restaurant = req.body;
    restaurant.id = uuid.v4()
    const restaurants = utilModule.getStoredRestaurants()
    restaurants.push(restaurant)
    utilModule.storedRestaurants(restaurant)

    res.redirect('/confirm');
})

app.get("/confirm", (req, res)=>{
    res.render('confirm')
})

app.get("/about", (req, res)=>{
    res.render('about')
})

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