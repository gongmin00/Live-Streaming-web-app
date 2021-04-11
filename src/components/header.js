import React from "react"
import {Link} from "gatsby"

const Header = () =>{
    return (
        <nav>
            <li><Link to="/" >Top Game</Link></li>
            <li><Link to="/topStreams" >Top Live Streams</Link></li>
        </nav>
    )
}

export default Header
