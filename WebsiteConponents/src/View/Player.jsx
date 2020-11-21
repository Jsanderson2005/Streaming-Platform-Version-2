import { ReactFlvPlayer } from 'react-flv-player'
import React from 'react'
const fetch = require('node-fetch')

class Player extends React.Component {

  constructor(props) {
    super(props)
    console.log(props.videoLink)
    this.state = {
      messagesList: [],
      playerHeight: 0,
      formHeight: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      streamLink: props.videoLink
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  fetchData = () => {
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
    this.setState({ width: window.innerHeight })
  };

  render = () => {
    return (
      <div>
        <ReactFlvPlayer url={this.state.streamLink} heigh="100%" width="100%" style={{ "padding": "10px" }} />
      </div>
    )
  }
}

export default Player