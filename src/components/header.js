import { Link } from "gatsby"
import React from "react"

import "./header.css"
import Logo from "./assets/logo.svg"
import ArrowDown from "./assets/arrow-down.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerIsOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ headerIsOpen: !this.state.headerIsOpen })
  }

  render() {
    return (
      <header>
        <div className="header-content">
          <div className="header-brand">
            <Link to="/"><Logo className="header-logo" /></Link>
            <button className="header-btn" onClick={this.handleClick.bind(this)}>
              <ArrowDown className={this.state.headerIsOpen ? "arrow-up" : ""} />
            </button>
          </div>
          <div className={this.state.headerIsOpen ? "header-menu" : "header-menu hidden"}>
            <Link to="#evento">EL EVENTO</Link>
            <Link to="#dress-code">DRESS CODE</Link>
            <Link to="#confirmar">CONFIRMAR</Link>
            <Link to="#guestbook">LIBRO DE VISITA</Link>
            <Link to="#contact">CONTACTO</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
