import React from 'react'
import { Button, Grid } from 'semantic-ui-react'


const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientId = "8836102077dc476b87b683e9fbcd411a"
const redirectUri = "http://localhost:3000/player"
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state"
]
const loginLink = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`



function Login() {

    return(
        <Grid>
            <Grid.Column style={{padding: 100}}>
                <Grid.Row>Welcome to Magic Lyrics</Grid.Row>
                <Grid.Row style={{paddingTop: 0}}>Spotify lyrics made easy</Grid.Row>
                <Grid.Row><Button href={loginLink}>Login to Spotify</Button></Grid.Row>
            </Grid.Column>
        </Grid>
    )
}

export default Login