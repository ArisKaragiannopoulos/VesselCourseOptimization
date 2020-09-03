var mongoose = require('mongoose');

//Port Schema

var portDistanceSchema = mongoose.Schema({
    _id: {
        type: String,
    },
    portname: {
        type: String
    },
    distances: {
        type: Object
    },
},

{ collection: 'portDistances' }
);


var portDistances = module.exports = mongoose.model('portDistances', portDistanceSchema);

//Get Ports
module.exports.getPortDistances= function (callback, limit) {
    portDistances.find(callback);
};

