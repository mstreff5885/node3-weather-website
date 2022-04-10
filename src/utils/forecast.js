const request = require('postman-request')

// weatherstack key = 2095bc1eb3a40374ef8e7d3416cfd7a0

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2095bc1eb3a40374ef8e7d3416cfd7a0&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '&units=f'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast