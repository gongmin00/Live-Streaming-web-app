import axios from "axios"
import React, { useState, useEffect } from "react"

export const TwitchApi = () => {
    const [accessToken, setAccessToken] = useState("")
    useEffect(() => {
        axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=${process.env.GRANT_TYPE}`)
            .then((res) => {
                console.log("res",res)
                setAccessToken(res.data.access_token)
            })
    },[])
   
    return (
        <div>
            <TopGameApi accessToken={accessToken}/>
        </div>
    )
}

export const TopGameApi = (props) =>{
    console.log('access token', props.accessToken)
    return (
        <div></div>
    )
}

// axios.create({
    // headers: {
    //     "Client-ID": process.env.CLIENT_ID,
    //     "Authorization": `Bearer${res.data.access_token}`
    // }

// })