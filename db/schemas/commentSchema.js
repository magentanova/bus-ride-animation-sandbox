const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const commentSchema = new Schema({
	title: String
})

module.exports = {
   Comment: createModel(' Comment', commentSchema),
}
