const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const drawingSchema = new Schema({
	name: String
})

module.exports = {
   Drawing: createModel(' Drawing', drawingSchema),
}
