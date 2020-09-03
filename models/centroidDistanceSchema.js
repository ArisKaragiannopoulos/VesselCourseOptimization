var mongoose = require('mongoose');

//Port Schema

var centroidDistanceSchema = mongoose.Schema({
    _id: {
        type: String,
    },
    centroidNo: {
        type: String
    },
    distances: {
        type: Object
    },
},

{ collection: 'centroidDistances' }
);


var centroidDistances = module.exports = mongoose.model('centroidDistances', centroidDistanceSchema);

//Get Ports
module.exports.getCentroidDistances= function (callback, limit) {
    centroidDistances.find(callback);
};

