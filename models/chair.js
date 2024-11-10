var mongoose = require('mongoose')
const {version} = require("nodemon/lib/utils");
var Schema= mongoose.Schema;

// Chair Model Schema
var chairSchema = new Schema({
    serial: {
        type: String,
        require: false
    },

    emergency: [{
        type: Number,
        require: true
    }],

}, {
    versionKey: false
});

module.exports = mongoose.model('Chair', chairSchema)