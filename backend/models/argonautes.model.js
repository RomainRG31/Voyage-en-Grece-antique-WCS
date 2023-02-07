const mongoose = require('mongoose');

const argonautesSchema = mongoose.Schema({
    name: { type: String, required: [true, "Le nom est obligatoire."] },
});

module.exports = mongoose.model('argonautes', argonautesSchema);


