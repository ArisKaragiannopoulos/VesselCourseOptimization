var mongoose = require('mongoose');

//Centroid Schema

var polygonSchema = mongoose.Schema({
    _id: {
        type: String
    },
    PolygonNo: {
        type: String
    },
    Coordinates: {
        Start: {
            x: {
                type: Number
            },
            y: {
                type: Number
            }
        },
        End: {
            x: {
                type: Number
            },
            y: {
                type: Number
            }
        }
    },
    Avg_speed: {
        type: Number
    },
},
    { collection: 'PolygonCoords' }
);


var Polygons = module.exports = mongoose.model('Polygons', polygonSchema);

//Get Polygons
module.exports.getPolygons = function (callback, limit) {
    Polygons.find(callback);
};

//Get Centroid
module.exports.getPolygon = function (polygon, callback) {
    Polygons.find({ "PolygonNo": polygon }, callback);
};

