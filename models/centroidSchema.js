var mongoose = require('mongoose');

//Centroid Schema

var centroidSchema = mongoose.Schema({
    _id: {
        type: String
    },
    centroidNo: {
        type: String
    },
    coordinates: {
        x: {
            type: Number
        },
        y: {
            type: Number
        }
    },
},
    { collection: 'Centroids' }
);


var Centroids = module.exports = mongoose.model('Centroids', centroidSchema);

//Get Centroids
module.exports.getCentroids = function (callback, limit) {
    Centroids.find(callback);
};

//Get Centroid
module.exports.getCentroid = function(centroid, callback){
	Centroids.find({"CentroidNo": centroid}, callback);
};

