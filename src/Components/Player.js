import React, {Component} from 'react'
import { Button, Grid } from 'semantic-ui-react'

const bg = "https://sheffieldsolidsurfaces.b-cdn.net/wp-content/uploads/sites/3/2019/02/b0da5f_1dec43baa7e544a986e5b77576b4b4dfmv2.jpg"

class Player extends Component {
    
    constructor() {
        super()
        this.state = {
            songData: null,
            lyrics: null,
            songURL: null
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
                ).then(() => fetch(`http://localhost:3001/lyrics?song=${this.state.songData.item.name}&artist=${this.state.songData.item.artists[0].name}`)).then(
                    resp => resp.json()
                ).then(
                    data => {
                        this.setState({lyrics: data["lyrics"], songUrl: data["website"]})
                    }
                )
            }, 
            1000
        )
    }
    
    render() {
        return(
            <div>
                {this.state.songData ?
                    <Grid columns={2} style={{backgroundImage: `url(${bg})`}}>
                        <Grid.Column style={{fontSize: 25}}>
                            <Grid.Row>
                                <img src={this.state.songData.item.album.images[0].url} style={{maxHeight: 550, maxWidth: 550}} />
                            </Grid.Row>
                            <Grid.Row style={{marginTop: 25}}>
                                Song: {this.state.songData.item.name}
                            </Grid.Row>
                            <Grid.Row style={{marginTop: 25}}>
                                Artist: {this.state.songData.item.artists[0].name}
                            </Grid.Row>
                            <Grid.Row style={{marginTop: 25}}>
                                <Button onClick={this.previousNext} id="previous">Previous</Button>
                                <Button onClick={this.playPause}  id="play">Play</Button>
                                <Button onClick={this.playPause}  id="pause">Pause</Button>
                                <Button onClick={this.previousNext} id="next">Next</Button>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column style={{fontSize: 25, lineHeight: 1.5}}>
                                <div className="preformatted">{this.state.lyrics}</div>
                        </Grid.Column>
                    </Grid>
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

