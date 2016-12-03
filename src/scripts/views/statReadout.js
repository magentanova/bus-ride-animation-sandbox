import React from 'react'

const StatReadout = React.createClass({
	 render: function() {
	 	var statsObj = this.props.stats
	 	var statJSX = []
	 	for (var prop in statsObj) {
	 		var statString = `${prop}:${statsObj[prop]}`
	 		statJSX.push(<p className="stat">{statString}</p>)
	 	}
	 	return (
	 		<div className={'stat-readout'} >
	 			{statJSX}
	 		</div>
	 	)
 	}
})


export default StatReadout
