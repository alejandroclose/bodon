import { Link } from "gatsby"
import React from "react"

import "./hero.css"
import cover from "../gifs/cover.gif"

class Hero extends React.Component {
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
          <img src={cover} className="hero-cover" />
          <div className="hero-text">
            17 de Octubre de 2020
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;