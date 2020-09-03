var mongoose = require('mongoose');

//PointDistances Schema

var pointDistanceSchema = mongoose.Schema({
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

{ collection: 'PointDistances' }
);


var pointDistances = module.exports = mongoose.model('pointDistances', pointDistanceSchema);

//Get PointDistances
module.exports.getPointDistances= function (callback, limit) {
    pointDistances.find(callback);
};

