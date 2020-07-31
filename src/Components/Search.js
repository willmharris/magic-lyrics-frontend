import React, {Component} from 'react'

class Search extends Component {
    
    refresh() {
        setInterval(
            function apiCall() { 
                console.log("test"); 
            }, 
            1000
        )
    }
    
    render() {
        return(
            <div>
                <div>Search</div>
            </div>
        )
    }

    componentDidMount() {
        this.refresh()
    }
}

export default Search