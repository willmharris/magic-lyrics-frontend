import React, {Component} from 'react'

class Player extends Component {
    
    constructor() {
        super()
        this.state = {
            songData: null
        }
    }

    playPause = (event) => {
        fetch(`https://api.spotify.com/v1/me/player/${event.target.id}`, {
          method: "PUT",
          headers: {
            "Authorization": "Bearer " + this.props.accessToken
          }
        })
      }
    
    previousNext = (event) => {
        fetch(`https://api.spotify.com/v1/me/player/${event.target.id}`, {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + this.props.accessToken
          }
        })
    }

    

    refresh() {
        setInterval( () => {
                fetch("https://api.spotify.com/v1/me/player", {
                    headers: {"Authorization": "Bearer " + this.props.accessToken}
                }).then(
                    resp => resp.json()
                ).then(
                    data => {this.setState({songData: data})}
                )
            }, 
            1000
        )
    }
    
    render() {
        return(
            <div>
                {this.state.songData ?
                    <div>
                        <img src={this.state.songData.item.album.images[0].url} />
                        <div>Song: {this.state.songData.item.name}</div>
                        <div>Artist: {this.state.songData.item.artists[0].name}</div>
                        <button onClick={this.previousNext} id="previous">Previous</button>
                        <button onClick={this.playPause}  id="play">Play</button>
                        <button onClick={this.playPause}  id="pause">Pause</button>
                        <button onClick={this.previousNext} id="next">Next</button>
                    </div>
                :
                    null
                }
            </div>
        )
    }

    componentDidMount() {
        window.location.hash = ''
        this.refresh()
    }

}

export default Player

