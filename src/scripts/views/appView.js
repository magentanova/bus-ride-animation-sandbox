import React from 'react'
import StatReadout from './statReadout'
import STORE from '../store'
import ACTIONS from '../actions'

const AppView = React.createClass({

	 componentWillMount: function() {
	 	STORE.on('storeChanged', ()=> {
	 		this.setState(STORE._getData())
	 	})
	 },

	 getInitialState: function() {
	 	return STORE._getData()
	 },

	 render: function() {
	 	return (
	 		<div className={'app'} >
	 			<div className='butts'>
		 			<Button 
		 				statAffected='love' 
		 				text="talk to neightbor" 
		 				cooldownTime={3000} 
		 				/>
		 			<Button 
		 				statAffected='attack' 
		 				text="work out" 
		 				cooldownTime={1000} 
		 				/>
		 			<Button 
		 				statAffected="intelligence"
		 				text="read" 
		 				cooldownTime={5000} 
		 				/>
		 		</div>
	 			<StatReadout stats={this.state.stats} />
	 		</div>
	 	)
 	}
})

const Button = React.createClass({
	getInitialState: function() {
		return {
			cooldownWidth: 0,
			buttonAvailable: true
		}
	},

	_concludeCooldown: function() {
		this.setState({
			buttonAvailable: true
		})
		ACTIONS.incrementStat(this.props.statAffected)
	},

	_getWidthChange: function() {
		return 1600/this.props.cooldownTime
	},

	_initCooldown: function(event) {
		console.log('initting cooldown')
		if (!this.state.buttonAvailable) {
			console.log('button unavailable')
			return 
		}
		this.setState({
			buttonAvailable: false,
			cooldownWidth: 100
		})

		var reduceCooldown = () => {
			console.log('reducing cooldown')
			if (this.state.cooldownWidth > 0) {
				this.setState({
					cooldownWidth: this.state.cooldownWidth - this._getWidthChange()
				})
				setTimeout(reduceCooldown,17)
				return
			}
			this._concludeCooldown()
		}
		setTimeout(reduceCooldown, 17)
	},

	render: function() {
		var cooldownStyle = {width: this.state.cooldownWidth + '%'}
		return (
			<button className={this.state.buttonAvailable ? '' : 'disabled'} onClick={this._initCooldown}>
				{this.props.text}
				<div style={cooldownStyle} className="cooldown"></div>
			</button>
			)
	}
})

export default AppView
