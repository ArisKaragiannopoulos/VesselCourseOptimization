var mongoose = require('mongoose');

//PointDistances Schema

var Distances10NmSpdSchema = mongoose.Schema({
    _id: {
        type: String,
    },
    PointName: {
        type: String
    },
    distances: {
        type: Object
    },
},

{ collection: 'Distances10NmSpd' }
);


var Distances10NmSpd = module.exports = mongoose.model('Distances10NmSpd', Distances10NmSpdSchema);

//Get PointDistances
module.exports.getDistances10NmSpd= function (callback, limit) {
    Distances10NmSpd.find(callback);
};

