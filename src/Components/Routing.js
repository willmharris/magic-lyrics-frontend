import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
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
            <Router>
                <Route exact path="/" render={() => <Login/>} />
                <Route exact path="/magic-lyrics-frontend" render={() => <Login/>} />
                <Route exact path="/player" render={() => <Player accessToken={this.state.accessToken}/>} />
                <Route exact path="/search" render={() => <Search/>} />
            </Router>
        )
    }
}

export default Routing