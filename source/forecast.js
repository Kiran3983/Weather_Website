/* Functions defined here will be used by other files  */


const request = require('request')

const forecast = (lattitude , longitude , callback ) => {
      const url = 'http://api.weatherstack.com/current?access_key=f2c6a6094f8f6d437f881bfc11f6b4cc&query=' + lattitude + ',' + longitude + '&units=f'
     
      request({url: url , json: true} , (error , response) => {
         if (error) {
            callback('Oops...Unable to connect to the weather services !!!' , undefined)
        } else if (response.body.error) {
            callback('Unable to find location !!!' , undefined)
        } else {
            callback(undefined , 'Weather description =  ' + response.body.current.weather_descriptions[0] + '. It is currently  ' + response.body.current.temperature + ' fahrenheit out there.'
            + 'It feels like  ' + response.body.current.feelslike + ' fahrenheit out there.')
        }
    })
}

module.exports = forecast