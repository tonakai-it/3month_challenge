const express = require('express');
const router = express.Router()


const fs = require("fs"),
    path = require('path')
const uuid = require('uuid')


const resData = require("../util/restaurant-data")


router.get("/restaurants", (req, res)=>{
    let order = req.query.order;
    let = nextOrder = 'desc'
    if (order !=='asc' && order !== 'desc'){
        order = 'asc'
    }

    if(order === 'desc') {
        nextOrder = 'asc'
    }
    const filePath = path.join(__dirname, 'data', 'restaurants.json')

    storedRestaurants.sort(function(resA, resB) {
        if ((order === 'asc' && resA.name > resB.name) || 
            (order === 'desc' && resA.name > resB.name)) {
            return 1
        } else {
            return -1
        }
    })

    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData);
    res.render('restaurants', { numberOfRestaurants:storedRestaurants.length, restaurants:storedRestaurants,nextOrder:nextOrder  })
})
// router.get('/restaurant1')
// router.get('/restaurant1')
router.get('/restaurants/:id', (req, res)=> { //restaurants/r1
    const resutarantId = req.params.id; // [req.params.]でslug部分(=id)が補完されるようになっている
    const restaurants = resData.getStoredRestaurants()


    for (const restaurant of restaurants) {
        if (restaurant.id === resutarantId) {
            return res.render('restaurant-detail', {restaurant: restaurant})
        }
    }

    res.status(400).render('404');
})

router.get("/recommend", (req, res)=>{
    res.render('recommend')
})

router.post("/recommend", (req,res) =>{
    const restaurant = req.body;
    restaurant.id = uuid.v4()
    const restaurants = resData.getStoredRestaurants()
    restaurants.push(restaurant)
    resData.storedRestaurants(restaurant)

    res.redirect('/confirm');
})

router.get("/confirm", (req, res)=>{
    res.render('confirm')
})

module.exports = router