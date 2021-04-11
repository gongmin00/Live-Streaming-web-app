import React from "react"
import {Router} from "@reach/router"
import Game from "../components/Games"
import Streams from "../components/Streams"
import Header from "../components/Header"
const IndexPage = () => (
<div> 
<Header />
  <Router>
    <Streams path="/topStreams" />
    <Game path="/"/>
  </Router>
</div>
  

  
)

export default IndexPage
