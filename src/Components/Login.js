import React from 'react'
import { Button, Grid } from 'semantic-ui-react'


const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientId = "8836102077dc476b87b683e9fbcd411a"
const redirectUri = "https://willmharris.github.io/magic-lyrics-frontend/player"
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state"
]
const loginLink = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

const bg = "https://sheffieldsolidsurfaces.b-cdn.net/wp-content/uploads/sites/3/2019/02/b0da5f_1dec43baa7e544a986e5b77576b4b4dfmv2.jpg"

function Login() {

    return(
        <Grid style={{backgroundImage: `url(${bg})`}}>
            <Grid.Column style={{paddingTop: 100}}>
                <Grid.Row style ={{paddingLeft: 375, paddingTop: 100, fontSize: 60}}>Welcome to Magic Lyrics</Grid.Row>
                <Grid.Row style={{paddingLeft: 475, paddingTop: 100, fontSize: 40}}>Spotify lyrics made easy</Grid.Row>
                <Grid.Row style={{paddingLeft: 515, paddingTop: 100}}>
                    <Button href={loginLink} style={{fontSize: 35}}>Login to Spotify buddy</Button>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 325}}></Grid.Row>
            </Grid.Column>
        </Grid>
    )
}

export default Login