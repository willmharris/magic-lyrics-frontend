import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login.js'
import Player from './Player.js'
import Search from './Search.js'

class Routing extends Component {
    
    constructor() {
        super()
        this.state = {
            accessToken: window.location.hash.substring(14)
        }
    }
    
    render() {
        return(
            <div>
                {
                    this.state.accessToken.length > 0 
                    ?
                    <Player accessToken={this.state.accessToken}/>
                    :
                    <Login/>
                }
            </div>
            
          
        )
    }
}

export default Routing