const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {type: String, required: true},
    done: {type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.ObjectId,
        ref: "checklist", //ref ao item que é lincado
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema)