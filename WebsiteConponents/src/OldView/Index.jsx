import React, { Suspense, useState } from 'react'
import {
  Header,
  HeaderName,
  HeaderMenuItem,
  Content
} from 'carbon-components-react/lib/components/UIShell'
const Player = React.lazy(() => import('./PlayerNew.jsx'));
const fetch = require('node-fetch')
var ScrollArea = require('react-scrollbar');
import { Switch, Route, Router } from "react-router";
const createBrowserHistory = require("history/createBrowserHistory")


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
              <br />
              <div style={{ 'display': 'inline-flex' }}>
                <HeaderMenuItem style={{ 'fontFamily': 'Candara', 'color': '#FFFFFF', 'fontSize': '1rem' }} href="/">Home</HeaderMenuItem>
                <HeaderMenuItem style={{ 'fontFamily': 'Candara', 'color': '#FFFFFF', 'fontSize': '1rem' }} href="/stream1">Stream 1</HeaderMenuItem>
                <HeaderMenuItem style={{ 'fontFamily': 'Candara', 'color': '#FFFFFF', 'fontSize': '1rem' }} href="/stream2">Stream 2</HeaderMenuItem>
                <HeaderMenuItem style={{ 'fontFamily': 'Candara', 'color': '#FFFFFF', 'fontSize': '1rem' }} href="/stream3">Stream 3</HeaderMenuItem>
                <HeaderMenuItem style={{ 'fontFamily': 'Candara', 'color': '#FFFFFF', 'fontSize': '1rem' }} href="/stream4">Stream 4</HeaderMenuItem>
                <HeaderMenuItem style={{ 'fontFamily': 'Candara', 'color': '#FFFFFF', 'fontSize': '1rem' }} href="/stream5">Stream 5</HeaderMenuItem>
              </div>
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
        <br />
        <br />
        <br />
        <Suspense fallback={<div style={{ 'height': '100%', 'display': 'flex', 'align-items': 'center', 'justify-content': 'center', 'padding': '10px'}}><div style={{ "padding": "10px", "margin": "10px", "backgroundClip": "padding-box", "backgroundColor": "#FFFFFF", "height": "100%", 'textAlign': 'center', 'fontFamily': 'Candara' }}>Loading....</div></div>}>
          <Router history={newHistory}>
            <Switch>
              <Route exact path="/stream1">
                < Player chatLink="/chats/chat1.json" videoLink="/media-server/live/stream1.flv" />
              </Route>
              <Route exact path="/stream2">
                < Player chatLink="/chats/chat2.json" videoLink="/media-server/live/stream2.flv" />
              </Route>
              <Route exact path="/stream3">
                < Player chatLink="/chats/chat3.json" videoLink="/media-server/live/stream3.flv" />
              </Route>
              <Route exact path="/stream4">
                < Player chatLink="/chats/chat4.json" videoLink="/media-server/live/stream4.flv" />
              </Route>
              <Route exact path="/stream5">
                < Player chatLink="/chats/chat5.json" videoLink="/media-server/live/stream5.flv" />
              </Route>
              <Route exact path="/">
                <div className="container bx--theme--g100" style={{ 'backgroundColor': 'transparent', 'padding': '10px' }}>
                  <br />
                  <br />
                  <Content id="main-content" style={{ 'background-color': 'transparent' }} style={{ 'height': '100%', 'padding': '10px' }}>
                    <div style={{ "padding": "10px", "margin": "10px", "backgroundClip": "padding-box", "backgroundColor": "#FFFFFF", "height": "100%", 'textAlign': 'center', 'fontFamily': 'Candara' }}>
                      <h1>Timetable</h1>
                      This will be published soon
                    </div>
                  </Content>
                </div>
              </Route>
            </Switch>
          </Router>
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