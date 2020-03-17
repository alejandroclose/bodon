import { Link } from "gatsby"
import React from "react"

import "./header.css"
import Logo from "./assets/logo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerIsOpen: true
    };
  }
  render() {
    return (
      <header>
        <div className="header-content">
          <div className="header-brand">
            <Link to="/"><Logo className="header-logo" /></Link>
            <button className={this.state.headerIsOpen ? "header-btn" : "hidden"}>V</button>
          </div>
          <div className="header-menu">
            <Link to="#evento">EL EVENTO</Link>
            <Link to="#confirmar">CONFIRMAR</Link>
            <Link to="#confirmar">DRESS CODE</Link>
            <Link to="#confirmar">LIBRO DE VISITA</Link>
            <Link to="#confirmar">HOTELES</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
