/* Functions defined here will be used by other files */


const request = require('request')

const geocode = (address , callback) => {
    const url  = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2lyYW4zOTgzIiwiYSI6ImNsY2xqenhpZDEzb20zcG10bW13YWhtZDAifQ.cOfe2MjRxDcBaoiD1Sz4pQ&limit=1' 
    
    request({url: url , json: true} , (error , response) => {
        if (error) {
            callback('Oops...Unable to connect to location services !!!')
        } else if (response.body.features.length === 0) {
            callback('No match found !!! Please try with other location !!!')
        }else {
            callback(undefined, {
                longitude:response.body.features[0].center[0],
                lattitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode


/* 
const url  = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia2lyYW4zOTgzIiwiYSI6ImNsY2xqenhpZDEzb20zcG10bW13YWhtZDAifQ.cOfe2MjRxDcBaoiD1Sz4pQ&limit=1' 
Or 
const url  = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2lyYW4zOTgzIiwiYSI6ImNsY2xqenhpZDEzb20zcG10bW13YWhtZDAifQ.cOfe2MjRxDcBaoiD1Sz4pQ&limit=1' 

Both methods are correct but 2nd one is more generic in case address contains any special character
In this case  encodeURIComponent(address) will convert that special char to encoded version
e.g. encoded version of ? is %3F 
If you use 1st method , then program will crash if address contains any special character 
*/