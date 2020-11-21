import React, { Suspense } from 'react'
import {
  Header,
  HeaderName
} from 'carbon-components-react/lib/components/UIShell'
const Player = React.lazy(() => import('./PlayerNew.jsx'));
const createBrowserHistory = require("history").createBrowserHistory


class Index extends React.Component {
  render = () => {
    const newHistory = createBrowserHistory();
    return (
      <div className="container bx--theme--g100">
        <Header aria-label="Salesian College" style={{ 'fontFamily': 'Candara', 'backgroundColor': '#005eb8', 'height': 'auto', 'fontWeight': 'normal' }}>
          <HeaderName prefix='' style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'padding': '10px', 'textAlign': 'center' }}>
            <li style={{ 'listStyleType': 'none' }} className="test">
              <img src={'https://resources.finalsite.net/images/v1562681098/salesianhantsschuk/f0tlxi8k3no2om4lx4wy/bottom-logo.svg'} />
              <div>STREAMING PLATFORM</div>
            </li>
          </HeaderName>
        </Header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Suspense fallback={<div style={{ 'height': '100%', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'padding': '10px'}}><div style={{ "padding": "10px", "margin": "10px", "backgroundClip": "padding-box", "backgroundColor": "#FFFFFF", "height": "100%", 'textAlign': 'center', 'fontFamily': 'Candara' }}>Loading....</div></div>}>
          < Player chatLink="/chats/MainChat" videoLink="/live/stream.flv" />
        </Suspense>
      </div >
    )
  }
}

/*
class MainContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { page: props.page }
  }
  render = () => {
    var page = this.state.page
    if (page === "Home")
      return (
        <div style={{ "padding": "10px", "margin": "10px", "backgroundClip": "padding-box", "backgroundColor": "#FFFFFF", "height": "100%" }}>
          <br />
          TIMETABLE GOES HERE
        </div>
      )
    if (page === "Stream1") {
      return (
        < Player chatLink="https://localhost:3001/chats/chat1.json" videoLink="http://localhost:8000/live/stream1.flv" />
      )
    }
    if (page === "Stream2") {
      return (
        < Player chatLink="https://localhost:3001/chats/chat1.json" videoLink="http://localhost:8000/live/stream1.flv" />
      )
    }
    if (page === "Stream3") {
      return (
        < Player chatLink="https://localhost:3001/chats/chat1.json" videoLink="http://localhost:8000/live/stream1.flv" />
      )
    }
    if (page === "Stream4") {
      return (
        < Player chatLink="https://localhost:3001/chats/chat1.json" videoLink="http://localhost:8000/live/stream1.flv" />
      )
    }
    if (page === "Stream5") {
      return (
        < Player chatLink="https://localhost:3001/chats/chat1.json" videoLink="http://localhost:8000/live/stream1.flv" />
      )
    }
  }
}
*/

export default Index