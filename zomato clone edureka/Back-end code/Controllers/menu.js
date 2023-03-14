const Menu = require('../models/menu')

exports.getAllMenu = (req, res) => {
    Menu.find({restaurantName:req.params.rName})
        .then(result =>{
            res.send({
                message: "Menu fetched successfully",
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
