import { Link } from "gatsby"
import React from "react"

import "./contact.css"

import Bouquet from "./assets/bouquet.svg"
import Hat from "./assets/hat.svg"


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id="contact">
        <div className="contact-header">
          <h2 className="contact-title">CONTACTO</h2>
        </div>
        <div className="contact-content">
          <div className="contact-desc">
              <Bouquet className="contact-img"/>
            <div className="contact-text">
              <h3 className="contact-text-title">Alejandra:</h3>
              <div className="contact-text-content">+34 609 589 775</div>
            </div>
          </div>
          <div className="contact-desc">
            <Hat className="contact-img"/>
            <div className="contact-text">
              <h3 className="contact-text-title">Alejandro:</h3>
              <div className="contact-text-content">+34 622 826 408</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;