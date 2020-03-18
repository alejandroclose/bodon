import { Link } from "gatsby"
import React from "react"

import "./hero.css"
import cover from "../gifs/cover.gif"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            Alejandra y Alejandro
          </div>
          <div className="hero-img">
            <img src={cover} className="hero-cover" />
          </div>
          <div className="hero-text">
            17 de Octubre de 2020
          </div>
        </div>
      </div>
    )
  }
}

export default Header;