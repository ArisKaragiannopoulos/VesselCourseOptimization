var mongoose = require('mongoose');

//Port Schema

var PolygonCoordsDistanceSchema = mongoose.Schema({
    _id: {
        type: String,
    },
    polygonNo: {
        type: Object
    }
},

{ collection: 'testdb' }
);


var PolygonCoordsDistances = module.exports = mongoose.model('PolygonCoordsDistances', PolygonCoordsDistanceSchema);

//Get Ports
module.exports.getPolygonCoords= function (callback, limit) {
    PolygonCoordsDistances.find(callback);
};