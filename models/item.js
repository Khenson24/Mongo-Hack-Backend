const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hackathon: {
        type: String,
        required: true
    },
    hackathon_date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    prizes: {
        type: String,
        required: true
    },
    t_link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema)