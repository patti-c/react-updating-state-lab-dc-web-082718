import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>YoutubeDebugger
        <br></br>
        <button
          className="bitrate"
          onClick={this.changeBitrate}
        >
          Change Bitrate
        </button>
        <button
          className="resolution"
          onClick={this.changeResolution}
        >
          Change Resolution
        </button>
        <div>
          Bitrate: {this.state.settings.bitrate}
          <br></br>
          Resolution: {this.state.settings.video.resolution}
        </div>
      </div>

    )
  }
}
