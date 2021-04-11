import React, { useState, useEffect } from "react"
import { TwitchApi} from "../config/twitchApi"
import axios from "axios"

const Game = () => {
    // const [games, setGames] = useState([])

    // useEffect(()=>{
    //     twitchApi()
    //     const getTopGame = async ()=>{
    //         const topGameResults = await topGameApi.axios("https://api.twitch.tv/helix/games/top")
    //         console.log(topGameResults)
    //     }
    //     getTopGame()
    // })
  
    return (
        <div>
            game component
            <TwitchApi/>
            {/* <TopGameApi/> */}
        </div>
    )
}

export default Game
