// import axios from "axios"

// const getAccessToken = ()=>{
//     axios.post("https://id.twitch.tv/oauth2/token",{
//         client_id:"s13iws31rqknrbdfjw9zn9ec87enuy",
//         client_secret:"7ypt4uimnp5eugu6j1o99nywt6gjvu",
//         grant_type:"client_credentials"
//     }).then((res)=>{
//         console.log(res)
//     })
// }
// export default getAccessToken

exports.default = {
    url:"https://id.twitch.tv/oauth2/token",
    client_id:"s13iws31rqknrbdfjw9zn9ec87enuy",
    client_secret:"7ypt4uimnp5eugu6j1o99nywt6gjvu",
    grant_type:"client_credentials"
}