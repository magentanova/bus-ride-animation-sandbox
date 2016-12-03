import Backbone from 'backbone'
import _ from 'underscore'

const STORE = _.extend(Backbone.Events,{
	_data: {
		stats: [
			{
				text: 'atk',
				val: 0,
				changing: false
			},
			{
				text: 'luv',
				val: 0,
				changing: false
			},
		}
	],

	_emitChange: function() {
		this.trigger('storeChanged')
	},

	_get: function(prop) {
		return this._data[prop]
	},

	_getData: function() {
		return this._data
	},


	_set: function(newData) {
		this._data = _.extend(this._data,newData)
		this._emitChange()
	}
})


export default STORE