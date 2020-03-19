import { Link } from "gatsby"
import React from "react"

import "./event.css"

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  } 

  render() {
    return (
      <div id={this.props.id}>
        <div className="event-header">
          <div className="event-title">{this.props.title}</div>
          <div className="event-description">{this.props.desc}</div>
        </div>
        <div className="event-content">
          <div className="event-image">{this.props.img}</div>
          <div className="event-details">
            <div className="info-title">{this.props.infoTitle}</div>
            <div className="info">
              <div className="schedule">{this.props.schedule}</div>
              <div className="location">{this.props.location}</div>
              <div className="mobility">
                <div>Transporte</div>
                <div>{this.props.mobility}</div></div>
              <div className="map"><Link to={this.props.mapLink}>{this.props.map}</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Event;