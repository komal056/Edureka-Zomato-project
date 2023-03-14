const Locations = require('../models/location')

exports.getAllLocations = (req, res) => {
    Locations.find()
        .then(result =>{
            res.send({
                message: "locations fetched successfully",
                data: result
            })
        })
        .catch(error =>
            res.send({
                message: "DB error occured",
                error: error
            })
        )
}

