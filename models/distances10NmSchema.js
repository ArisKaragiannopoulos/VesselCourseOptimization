var mongoose = require('mongoose');

//PointDistances Schema

var Distances10NmSchema = mongoose.Schema({
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

{ collection: 'Distances10Nm' }
);


var Distances10Nm = module.exports = mongoose.model('Distances10Nm', Distances10NmSchema);

//Get PointDistances
module.exports.getDistances10Nm= function (callback, limit) {
    Distances10Nm.find(callback);
};

