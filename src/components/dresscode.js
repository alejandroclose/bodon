import { Link } from "gatsby"
import React from "react"

import "./dresscode.css"


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
          <div className="dc-desc">para la boda</div>
        </div>
        <div>
          <div className="dc-women">
            <div className="dc-img"></div>
            <div className="dc-text"></div>
          </div>
          <div className="dc-men">
            <div className="dc-img"></div>
            <div className="dc-text"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default DressCode;