import { Link } from "gatsby"
import React from "react"

import "./event.css"

import Cal from "../components/assets/cal.svg"
import Pin from "../components/assets/pin.svg"
import Map from "../components/assets/map.svg"
import Bus from "../components/assets/bus.svg"

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
          <div className="event-media">{this.props.img}</div>
          <div className="event-details">
            <div className="info-title"><h3>{this.props.infoTitle}</h3></div>
            <div className="info">
              <div className="info-text">
                <div ><Cal className="icon" /></div>
                <div className="time-date">{this.props.schedule}</div></div>
              <div className="info-text">
                <div><Pin className="icon"/></div>
                <div>
                  <div className="location"><h4>{this.props.location}</h4></div>
                  <div className="address">{this.props.address}</div>
                </div>
              </div>
              <div className="info-text">
                <div><Bus className="icon"/></div>
                <div>
                  <div className="location"><h4>Transporte</h4></div>
                  <div className="mobility-info">{this.props.mobility}</div></div>
              </div>
              <div className="info-text">
                <div><Map className="icon"/></div>
                <div className="map"><a href={this.props.mapLink} target="_blank">{this.props.map}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Event;