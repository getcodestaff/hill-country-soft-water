
function slugify(type, data) {

    const usShortState = data.stateshort_varchar_2.toLowerCase()
    const usState = data.state_varchar_20.toLowerCase()
    const city = data.city_varchar_25.toLowerCase()

    switch (type) {
        case "CITY-SHORTSTATE":
            return `${city}-${usShortState}`.toLowerCase().replace(/ /g, "-")
        case "STATE/CITY":
            return `${usState}/${city}`.toLowerCase().replace(/ /g, "-")
        case "LOCATIONS":
            return `locations/${usState}/${city}`.toLowerCase().replace(/ /g, "-")
        default:
            console.log("slugify: type not found")
    }
    return null;
}

module.exports = {
    slugify
}
