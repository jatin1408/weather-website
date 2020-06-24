const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log(latitude)
    console.log(longitude)
    const url = 'http://api.weatherstack.com/current?access_key=56ea9820414ac85dc47b8f4ce1f28a3a&query=' + latitude + ',' + longitude + '&units=f'
    console.log(url)
    request({ url, json: true }, (error, response) => {
         if (error) {
            callback('Unable to connect to weather service!', undefined)
         }
        else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast