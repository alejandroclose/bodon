import { Link } from "gatsby"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'

import "./confirmation.css"
import AtendeeForm from "./attendee-form"


class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div id="confirmar">
        <div className="conf-header">
          <h2 className="conf-title">CONFIRMA TU ASISTENCIA</h2>
          <div className="conf-text">
            Nos encantaría que nos acompañaras en nuestro día. Por favor, confirma si podrás o no venir.
        </div>
          <div className="conf-arrow"></div>
          <button onClick={this.handleClick} className="conf-btn">CONFIRMAR</button>
        </div>
        <div className={this.state.isOpen ? "conf-open" : "conf-closed"}>
          <AtendeeForm />
        </div>
      </div>
    )
  }
}

export default Confirmation;