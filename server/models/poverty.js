const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const povertySchema = new Schema({
    sevpov: {
        type: Number
    },
    year: {
        type: Number
    },
    poverty_geo_name: {
        type: String
    },
    poverty_geo: {
        type: String
    },
    hc: {
        type: Number
    },
    poverty_level: {
        type: String,
        enum: ['ppp1', 'ppp2'],
    },
    gender: {
        type: String,
        enum: ['female', 'male']
    },
    povgap: {
        type: Number
    }
});

var Poverty = mongoose.model('Poverty', povertySchema);
module.exports = Poverty;