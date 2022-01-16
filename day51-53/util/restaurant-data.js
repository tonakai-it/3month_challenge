const filePath = path.join(__dirname, 'data', 'restaurants.json')

module.exports = function getStoredRestaurants() {
    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData);
    return storedRestaurants
}

module.exports = function storedRestaurants(storableRestaurants) {
    fs.writeFileSync(filePath, JSON.stringify(storableRestaurants))
}