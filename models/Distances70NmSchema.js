var mongoose = require('mongoose');

//PointDistances Schema

var Distances70NmSchema = mongoose.Schema({
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

{ collection: 'Distances70Nm' }
);


var Distances70Nm = module.exports = mongoose.model('Distances70Nm', Distances70NmSchema);

//Get PointDistances
module.exports.getDistances70Nm= function (callback, limit) {
    Distances70Nm.find(callback);
};

