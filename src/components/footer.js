import { Link } from "gatsby"
import React from "react"

import "./footer.css"

import Forest from "../images/forest.png"


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="credits">
          <div>Hecho en Barcelona</div>
          <div>por Alejandra y Alejandro</div>
        </div>
        <img className="forest" src={Forest}/>
      </div>
    )
  }
}

export default Footer;