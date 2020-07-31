import React from 'react'

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
        <div>
            <div>Login page</div>
            <br/>
            <a href={loginLink}>Login to Spotify</a>
        </div>
    )
}

export default Login