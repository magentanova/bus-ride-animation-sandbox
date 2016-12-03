const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const postSchema = new Schema({

})

module.exports = {
   Post: createModel(' Post', postSchema),
}
