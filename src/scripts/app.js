import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import AppView from './views/appView'


const app = function() {
  ReactDOM.render(<AppView />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..