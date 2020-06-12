import { Link } from "gatsby"
import React from "react"

import "./dresscode.css"

import Women from "../images/dresscode-M.png"
import Men from "../images/dresscode-H.png"


class DressCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id="dress-code">
        <div className="dc-header">
          <h2 className="dc-title">DRESS CODE</h2>
          <div className="dc-alt">para la boda</div>
        </div>
        <div className="dc-content">
          <div className="dc-desc break">
            <div><img className="dc-img" src={Women}/></div>
            <div className="dc-text">
              <h3 className="dc-text-title">Mujeres</h3>
              <div className="dc-text-content">Vestido corto. Tocado opcional.<br/>Se ruega evitar el color blanco.</div>
            </div>
          </div>
          <div className="dc-desc">
            <div><img className="dc-img" src={Men}/></div>
            <div className="dc-text">
              <h3 className="dc-text-title">Hombres</h3>
              <div className="dc-text-content">Traje oscuro y corbata.<br/>Los testigos pueden llevar chaqué.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DressCode;