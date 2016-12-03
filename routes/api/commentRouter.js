let Router = require('express').Router;
const commentRouter = Router()

let Comment = require('../../db/schemas/commentSchema.js').Comment

commentRouter
	.get(`/comment`, function(req, res){
		Comment.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
		res.json(results)
		})
	})

	.get(`/comment/:_id`, function(req, res){
		Comment.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
			res.json(record)
		})
	})

	.post(`/comment`, function(req,res) {
		let newRecord = new Comment(req.body)
		newRecord.save(function(err) {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			}
			else {  
				res.json(newRecord)
			}
		})
	})

	.put(`/comment/:_id`, function(req, res){
		Comment.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send(`no record found with that id`)
			}
			else {
				res.json(Object.assign({},req.body,record))
			}
		})
	})

	.delete(`/comment/:_id`, function(req, res){
		Comment.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
			res.json({
				msg: `record ${req.params._id} successfully deleted`,
				_id: req.params._id
			})
		})
	})

module.exports = commentRouter
