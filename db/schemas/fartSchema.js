const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const fartSchema = new Schema({
	title: String
})

module.exports = {
   Fart: createModel(' Fart', fartSchema),
}
