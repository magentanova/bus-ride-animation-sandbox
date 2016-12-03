let Router = require('express').Router;
const drawingRouter = Router()

let Drawing = require('../../db/schemas/drawingSchema.js').Drawing

drawingRouter
	.get(`/drawing`, function(req, res){
		Drawing.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
		res.json(results)
		})
	})

	.get(`/drawing/:_id`, function(req, res){
		Drawing.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
			res.json(record)
		})
	})

	.post(`/drawing`, function(req,res) {
		let newRecord = new Drawing(req.body)
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

	.put(`/drawing/:_id`, function(req, res){
		Drawing.findByIdAndUpdate(req.params._id, req.body, function(err, record){
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

	.delete(`/drawing/:_id`, function(req, res){
		Drawing.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
			res.json({
				msg: `record ${req.params._id} successfully deleted`,
				_id: req.params._id
			})
		})
	})

module.exports = drawingRouter
