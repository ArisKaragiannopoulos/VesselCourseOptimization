var mongoose = require('mongoose');

//PointDistances Schema

var Distances70NmSpdSchema = mongoose.Schema({
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

{ collection: 'Distances70NmSpd' }
);


var Distances70NmSpd = module.exports = mongoose.model('Distances70NmSpd', Distances70NmSpdSchema);

//Get PointDistances
module.exports.getDistances70NmSpd= function (callback, limit) {
    Distances70NmSpd.find(callback);
};

